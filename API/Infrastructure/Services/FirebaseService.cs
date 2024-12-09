using API.Application.Helpers;
using API.Application.Interfaces;
using Firebase.Database;
using Firebase.Database.Query;
using Newtonsoft.Json;
using static API.Core.Models.Enums;

namespace API.Infrastructure.Services
{
    public class FirebaseService: IFirebaseService
    {
        private readonly string Firebase_AuthSecret = Environment.GetEnvironmentVariable("Firebase_AuthSecret");
        private readonly string Firebase_BasePath = Environment.GetEnvironmentVariable("Firebase_BasePath");
        private readonly FirebaseClient _firebaseClient;

        public FirebaseService()
        {
            _firebaseClient = new FirebaseClient(
              Firebase_BasePath,
              new FirebaseOptions
              {
                  AuthTokenAsyncFactory = () => Task.FromResult(Firebase_AuthSecret)
              });
        }

        public FirebaseService(string basePath, string authSecret)
        {
            _firebaseClient = new FirebaseClient(
              basePath,
              new FirebaseOptions
              {
                  AuthTokenAsyncFactory = () => Task.FromResult(authSecret)
              });
        }

        public async Task DeleteData(FirebaseDataNodes node, string path)
        {
            await _firebaseClient.Child(node.ToString()).Child(path).DeleteAsync();
        }

        public async Task StoreData(FirebaseDataNodes node, object data,
            string? path = null, bool generateKey = false)
        {
            if(!string.IsNullOrEmpty(path) && !generateKey)
            {
                await _firebaseClient.Child(node.ToString()).Child(path)
                    .PutAsync(GetJSONData(data), DateTime.UtcNow.AddSeconds(5) - DateTime.UtcNow);
                return;
            }

            if (string.IsNullOrEmpty(path) && !generateKey)
            {
                await _firebaseClient.Child(node.ToString())
                    .PutAsync(GetJSONData(data), DateTime.UtcNow.AddSeconds(5) - DateTime.UtcNow);
                return;
            }

            if(string.IsNullOrEmpty(path) && generateKey)
            {
                string generatedKey = GenerateKey(DateTime.UtcNow);

                await _firebaseClient.Child(node.ToString()).Child(generatedKey).PutAsync(GetJSONData(data), DateTime.UtcNow.AddSeconds(5) - DateTime.UtcNow);

                //Assign the auto generated path to the "Id" parameter of the object
                await UpdateData(node, generatedKey + "/Id", generatedKey);
            }

            if (!string.IsNullOrEmpty(path) && generateKey)
            {
                string generatedKey = GenerateKey(DateTime.UtcNow);

                await _firebaseClient.Child(node.ToString()).Child(path)
                    .Child(generatedKey).PutAsync(GetJSONData(data), 
                    DateTime.UtcNow.AddSeconds(5) - DateTime.UtcNow);

                //Assign the auto generated path to the "Id" parameter of the object
                await UpdateData(node, path + "/" + generatedKey + "/Id", generatedKey);
            }
        }

        public async Task UpdateData(FirebaseDataNodes node, string path, object data)
        {
            await _firebaseClient.Child(node.ToString()).Child(path).PutAsync(GetJSONData(data), DateTime.UtcNow.AddSeconds(5) - DateTime.UtcNow);
        }

        public async Task<T> GetInstanceOfType<T>(FirebaseDataNodes node, string path = null)
        {
            if(string.IsNullOrEmpty(path))
                return await _firebaseClient.Child(node.ToString()).OnceSingleAsync<T>();

            return await _firebaseClient.Child(node.ToString()).Child(path).OnceSingleAsync<T>();
        }

        public async Task<IEnumerable<T>> GetCollectionOfType<T>(FirebaseDataNodes node, FilteringOptions? filteringOptions = null)
        {
            if(filteringOptions == null)
            {
                var result = await _firebaseClient.Child(node.ToString()).OnceAsync<T>();

				return ToEnumerable(result);
			}

            #region Time Period Filtering
            //Limiting and Path
            if (filterByPeriod(filteringOptions.StartDate, filteringOptions.EndDate) &&
                filteringOptions.LimitToFirst != null &&
                filteringOptions.Path != null)
            {
                var startDate = (DateTime)filteringOptions.StartDate;
                var endDate = GetEndDate((DateTime)filteringOptions.EndDate);
                var limitToFirst = (int)filteringOptions.LimitToFirst;
                var path = (string)filteringOptions.Path;

                var result = await _firebaseClient.Child(node.ToString()).Child(path)
                .OrderByKey().StartAt(GenerateKey(startDate)).EndAt(GenerateKey(endDate))
                .LimitToFirst(limitToFirst).OnceAsync<T>();

                return ToEnumerable(result);
            }

            //Path only
            if (filterByPeriod(filteringOptions.StartDate, filteringOptions.EndDate) &&
                filteringOptions.LimitToFirst == null &&
                filteringOptions.Path != null)
            {
                var startDate = (DateTime)filteringOptions.StartDate;
                var endDate = GetEndDate((DateTime)filteringOptions.EndDate);
                var path = (string)filteringOptions.Path;

                var result = await _firebaseClient.Child(node.ToString()).Child(path)
                .OrderByKey().StartAt(GenerateKey(startDate)).EndAt(GenerateKey(endDate))
                .OnceAsync<T>();

                return ToEnumerable(result);
            }

            //Limiting only
            if (filterByPeriod(filteringOptions.StartDate, filteringOptions.EndDate) &&
                filteringOptions.LimitToFirst != null &&
                filteringOptions.Path == null)
            {
                var startDate = (DateTime)filteringOptions.StartDate;
                var endDate = GetEndDate((DateTime)filteringOptions.EndDate);
                var limitToFirst = (int)filteringOptions.LimitToFirst;

                var result = await _firebaseClient.Child(node.ToString())
                .OrderByKey().StartAt(GenerateKey(startDate)).EndAt(GenerateKey(endDate))
                .LimitToFirst(limitToFirst)
                .OnceAsync<T>();

                return ToEnumerable(result);
            }

            //Time period only
            if (filterByPeriod(filteringOptions.StartDate, filteringOptions.EndDate) &&
                filteringOptions.LimitToFirst == null &&
                filteringOptions.Path == null)
            {
                var startDate = (DateTime)filteringOptions.StartDate;
                var endDate = GetEndDate((DateTime)filteringOptions.EndDate);

                var result = await _firebaseClient.Child(node.ToString())
                .OrderByKey().StartAt(GenerateKey(startDate)).EndAt(GenerateKey(endDate))
                .OnceAsync<T>();

                return ToEnumerable(result);
            }
            #endregion

            #region No Time Period Filtering
            //Path and Limiting
            if (!filterByPeriod(filteringOptions.StartDate, filteringOptions.EndDate) &&
                filteringOptions.LimitToFirst != null &&
                filteringOptions.Path != null)
            {
                var limitToFirst = (int)filteringOptions.LimitToFirst;
                var path = (string)filteringOptions.Path;

                var result = await _firebaseClient.Child(node.ToString()).Child(path)
                .OrderByKey().LimitToFirst(limitToFirst).OnceAsync<T>();

                return ToEnumerable(result);
            }
            //Path Only
            if (!filterByPeriod(filteringOptions.StartDate, filteringOptions.EndDate) &&
                filteringOptions.LimitToFirst == null &&
                filteringOptions.Path != null)
            {
                var path = (string)filteringOptions.Path;

                var result = await _firebaseClient.Child(node.ToString()).Child(path)
                .OrderByKey().OnceAsync<T>();

                return ToEnumerable(result);
            }
            //Limiting Only
            if (!filterByPeriod(filteringOptions.StartDate, filteringOptions.EndDate) &&
                filteringOptions.LimitToFirst != null &&
                filteringOptions.Path == null)
            {
                var limitToFirst = (int)filteringOptions.LimitToFirst;

                var result = await _firebaseClient.Child(node.ToString())
                .OrderByKey().LimitToFirst(limitToFirst).OnceAsync<T>();

                return ToEnumerable(result);
            }
            #endregion

            //No options selected but filteringOptions not null
            var _result = await _firebaseClient.Child(node.ToString()).OnceAsync<T>();

            return ToEnumerable(_result);
        }

		/// <summary>
		/// Extension to make sure the enumerable returned is never null.
		/// </summary>
		/// <typeparam name="T"></typeparam>
		/// <param name="data"></param>
		/// <returns>IEnumerable<T></returns>
		public IEnumerable<T> ToEnumerable<T>(IReadOnlyCollection<FirebaseObject<T>> data)
		{
			return data.Count() == 0 ? (new T[0]).AsEnumerable() : data.Select(item => item.Object);
		}

		private bool filterByPeriod(DateTime? startDate, DateTime? endDate)
        {
            return startDate != null && endDate != null;
        }

        private DateTime GetEndDate(DateTime dateTime)
        {
            //We add a day and subtract a second when the time selected is 23:00:00
            //We do this so we can get the end of that day 23:59:59
            //We only do that when the time is 23:00:00
            if(dateTime.Hour == 0 &&
                dateTime.Minute == 0 &&
                dateTime.Second == 0)
                return dateTime.AddDays(1).AddSeconds(-1);

            return dateTime;
        }

        private string GetJSONData(object data)
        {
            return JsonConvert.SerializeObject(data);
        }

        private string GenerateKey(DateTime dateTime)
        {
            long ticks = dateTime.Ticks;

            return ticks.ToString();
        }
	}
}
