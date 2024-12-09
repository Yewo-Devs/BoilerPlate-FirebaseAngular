using API.Application.Interfaces;
using IdentityX.Application.Interfaces;
using static API.Core.Models.Enums;

namespace API.Infrastructure.Services
{
	public class DataService: IDataService
	{
		private readonly IFirebaseService _firebaseService;

		public DataService(IFirebaseService firebaseService)
		{
			_firebaseService = firebaseService;
		}

		#region IdentityX Implementations
		public async Task DeleteData(string collection, string id)
		{
			FirebaseDataNodes node = (FirebaseDataNodes)Enum.Parse(typeof(FirebaseDataNodes), collection);

			await _firebaseService.DeleteData(node, id);
		}

		public async Task<IEnumerable<T>> GetCollectionOfType<T>(string collection)
		{
			FirebaseDataNodes node = (FirebaseDataNodes)Enum.Parse(typeof(FirebaseDataNodes), collection);

			return await _firebaseService.GetCollectionOfType<T>(node);
		}

		public async Task<T> GetInstanceOfType<T>(string collection, string id)
		{
			FirebaseDataNodes node = (FirebaseDataNodes)Enum.Parse(typeof(FirebaseDataNodes), collection);

			return await _firebaseService.GetInstanceOfType<T>(node, id);
		}

		public async Task StoreData(string collection, object data, string id)
		{
			FirebaseDataNodes node = (FirebaseDataNodes)Enum.Parse(typeof(FirebaseDataNodes), collection);

			await _firebaseService.StoreData(node, data, id);
		}

		public async Task UpdateData(string collection, string path, object data)
		{
			FirebaseDataNodes node = (FirebaseDataNodes)Enum.Parse(typeof(FirebaseDataNodes), collection);

			await _firebaseService.UpdateData(node, path, data);
		}
		#endregion
	}
}
