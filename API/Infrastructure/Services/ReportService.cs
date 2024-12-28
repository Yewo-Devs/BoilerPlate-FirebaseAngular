using API.Application.DTO;
using API.Application.Helpers;
using API.Application.Interfaces;
using API.Core.Models;
using API.Core.Models.Purchases;
using Google.Analytics.Data.V1Beta;
using IdentityX.Application.Interfaces;
using IdentityX.Core.Entities;
using System.Collections;
using static API.Core.Models.Enums;

namespace API.Infrastructure.Services
{
	public class ReportService : IReportService
	{
		private readonly IFirebaseService _firebaseService;
		private readonly IProfileService _profileService;
		private readonly IAccountService _accountService;
		private readonly string _ga4PropertyId;

		public ReportService(IFirebaseService firebaseService, IProfileService profileService,
			IAccountService accountService)
		{
			_firebaseService = firebaseService;
			_profileService = profileService;
			_accountService = accountService;

			_ga4PropertyId = Environment.GetEnvironmentVariable("Ga4_PropertyId");
		}

		public async Task<DashboardDto> GetDashboard()
		{
			DashboardDto dashboardDto = new DashboardDto();

			// Get Transactions
			var transactions = await _firebaseService
				.GetCollectionOfType<Transaction>(FirebaseDataNodes.Transaction, new FilteringOptions()
				{
					StartDate = DateTime.UtcNow.AddMonths(-12),
					EndDate = DateTime.UtcNow
				});

			dashboardDto.Currency = transactions.FirstOrDefault()?.Currency ?? "USD";

			var salesToday = transactions
				.Where(t => t.DateTime.Date == DateTime.UtcNow.Date)
				.Where(t => t.Status == "Success")
				.Sum(t => (decimal?)t.Amount) ?? 0;

			var salesYesterday = transactions
				.Where(t => t.DateTime.Date == DateTime.UtcNow.AddDays(-1).Date)
				.Where(t => t.Status == "Success")
				.Sum(t => (decimal?)t.Amount) ?? 0;

			dashboardDto.SalesToday = new DashboardAmountDto()
			{
				Amount = salesToday,
				PositiveChange = (salesToday - salesYesterday) > 0,
				Change = salesYesterday > 0 ? ((salesToday - salesYesterday) / salesYesterday) * 100 : 0,
			};

			var totalSales = transactions
				.Where(t => t.Status == "Success")
				.Sum(t => (decimal?)t.Amount) ?? 0;

			dashboardDto.TotalSales = new DashboardAmountDto()
			{
				Amount = totalSales,
			};

			var averageSale = transactions
				.Where(t => t.Status == "Success")
				.Select(x => (decimal?)x.Amount)
				.DefaultIfEmpty(0)
				.Average();

			var averageSalePrevious = transactions
				.Where(t => t.DateTime.Date < DateTime.UtcNow.AddMonths(-1).Date)
				.Where(t => t.Status == "Success")
				.Select(x => (decimal?)x.Amount)
				.DefaultIfEmpty(0)
				.Average();

			dashboardDto.AverageSale = new DashboardAmountDto()
			{
				Amount = (decimal)averageSale,
				PositiveChange = ((decimal)averageSale - averageSalePrevious) > 0,
				Change = (decimal)averageSalePrevious > 0 ? (((decimal)averageSale - (decimal)averageSalePrevious) / (decimal)averageSalePrevious) * 100 : 0,
			};

			var totalCustomers = transactions
				.Where(t => t.Status == "Success")
				.Select(t => t.CustomerId)
				.Distinct()
				.Count();

			var totalCustomersPrevious = transactions
				.Where(t => t.DateTime.Date < DateTime.UtcNow.AddMonths(-1).Date)
				.Where(t => t.Status == "Success")
				.Select(t => t.CustomerId)
				.Distinct()
				.Count();

			dashboardDto.TotalCustomers = new DashboardAmountDto()
			{
				Amount = totalCustomers,
				PositiveChange = (totalCustomers - totalCustomersPrevious) > 0,
				Change = totalCustomersPrevious > 0 ? ((totalCustomers - totalCustomersPrevious) / totalCustomersPrevious) * 100 : 0,
			};

			dashboardDto.SalesReport12Month = GetSalesReportMonthHashtable(transactions.ToArray(), 12);
			dashboardDto.SalesReport6Month = GetSalesReportMonthHashtable(transactions.ToArray(), 6);
			dashboardDto.SalesReport30Days = GetSalesReportDayHashtable(transactions.ToArray(), 30);
			dashboardDto.SalesReport7Days = GetSalesReportDayHashtable(transactions.ToArray(), 7);

			dashboardDto.TrafficSources12Month = await GetTrafficMonthSources(12);
			dashboardDto.TrafficSources6Month = await GetTrafficMonthSources(6);
			dashboardDto.TrafficSources30Days = await GetTrafficDaySources(30);
			dashboardDto.TrafficSources7Days = await GetTrafficDaySources(7);

			var recentTransactions = transactions
				.Where(t => t.Status == "Success")
				.DistinctBy(t => t.CustomerId)
				.OrderByDescending(t => t.DateTime)
				.Take(5);

			List<Customer> customersDto = new List<Customer>();

			foreach (var transaction in recentTransactions)
			{
				var profile = await _profileService.GetUserProfile(transaction.CustomerId);
				var user = await _accountService.GetUserFromId(transaction.CustomerId);

				customersDto.Add(new Customer()
				{
					Amount = transaction.Amount,
					Currency = transaction.Currency,
					Email = user.Email,
					FullName = $"{profile.FirstName} {profile.LastName}",
					Location = transaction.Location,
					PhotoUrl = profile.PhotoUrl
				});
			}

			dashboardDto.RecentCustomers = customersDto.ToArray();

			dashboardDto.RecentTransactions = transactions
				.OrderByDescending(t => t.DateTime)
				.Take(5)
				.ToArray();

			return dashboardDto;
		}

		private async Task<Hashtable> GetTrafficMonthSources(int period)
		{
			var client = await BetaAnalyticsDataClient.CreateAsync();
			var request = new RunReportRequest
			{
				Property = $"properties/{_ga4PropertyId}",
				DateRanges = { new DateRange { StartDate = DateTime.UtcNow.AddMonths(-period).ToString("yyyy-MM-dd"), EndDate = DateTime.UtcNow.ToString("yyyy-MM-dd") } },
				Dimensions = { new Dimension { Name = "sessionSource" } },
				Metrics = { new Metric { Name = "sessions" } }
			};

			var response = await client.RunReportAsync(request);

			Hashtable hashtable = new Hashtable();
			var labels = new List<string>();
			var sessions = new List<int>();

			foreach (var row in response.Rows)
			{
				labels.Add(row.DimensionValues[0].Value.Replace("(", "").Replace(")", ""));
				sessions.Add(int.Parse(row.MetricValues[0].Value));
			}

			hashtable.Add("labels", labels.Take(5));
			hashtable.Add("sessions", sessions.Take(5));

			return hashtable;
		}

		private async Task<Hashtable> GetTrafficDaySources(int period)
		{
			var client = await BetaAnalyticsDataClient.CreateAsync();
			var request = new RunReportRequest
			{
				Property = $"properties/{_ga4PropertyId}",
				DateRanges = { new DateRange { StartDate = DateTime.UtcNow.AddDays(-period).ToString("yyyy-MM-dd"), EndDate = DateTime.UtcNow.ToString("yyyy-MM-dd") } },
				Dimensions = { new Dimension { Name = "sessionSource" } },
				Metrics = { new Metric { Name = "sessions" } }
			};

			var response = await client.RunReportAsync(request);

			Hashtable hashtable = new Hashtable();
			var labels = new List<string>();
			var sessions = new List<int>();

			foreach (var row in response.Rows)
			{
				labels.Add(row.DimensionValues[0].Value.Replace("(", "").Replace(")", ""));
				sessions.Add(int.Parse(row.MetricValues[0].Value));
			}

			hashtable.Add("labels", labels.Take(5));
			hashtable.Add("sessions", sessions.Take(5));

			return hashtable;
		}

		private Hashtable GetSalesReportMonthHashtable(Transaction[] transactions, int period)
		{
			Hashtable hashtable = new Hashtable();

			var labels = new List<string>();
			var newUsersAmounts = new List<decimal>();
			var returningUsersAmounts = new List<decimal>();

			for (int i = 0; i < period; i++)
			{
				labels.Add(DateTime.UtcNow.AddMonths(-i).ToString("MMM"));
			}

			labels.Reverse();

			for (int i = 0; i < period; i++)
			{
				var startDate = DateTime.UtcNow.AddMonths(-i - 1);
				var endDate = DateTime.UtcNow.AddMonths(-i);

				//All customers from period before this one
				var allPrevCustomers = transactions
					.Where(t => t.DateTime < startDate)
					.Select(t => t.CustomerId);

				var monthlyTransactions = transactions
					.Where(t => t.DateTime >= startDate && t.DateTime < endDate)
					.ToList();

				var newUsersAmount = monthlyTransactions
					.Where(t => !allPrevCustomers.Contains(t.CustomerId))
					.Sum(t => t.Amount);

				var returningUsersAmount = monthlyTransactions
					.Where(t => allPrevCustomers.Contains(t.CustomerId))
					.Sum(t => t.Amount);

				newUsersAmounts.Add(newUsersAmount);
				returningUsersAmounts.Add(returningUsersAmount);
			}

			newUsersAmounts.Reverse();
			returningUsersAmounts.Reverse();

			hashtable.Add("labels", labels);
			hashtable.Add("newUsersAmounts", newUsersAmounts);
			hashtable.Add("returningUsersAmounts", returningUsersAmounts);

			return hashtable;
		}

		private Hashtable GetSalesReportDayHashtable(Transaction[] transactions, int period)
		{
			Hashtable hashtable = new Hashtable();

			var labels = new List<string>();
			var newUsersAmounts = new List<decimal>();
			var returningUsersAmounts = new List<decimal>();

			for (int i = 0; i < period; i++)
			{
				labels.Add(DateTime.UtcNow.AddDays(-i).ToString("d MMM"));
			}

			labels.Reverse();

			for (int i = 0; i < period; i++)
			{
				var startDate = DateTime.UtcNow.AddDays(-i - 1);
				var endDate = DateTime.UtcNow.AddDays(-i);

				//All customers from period before this one
				var allPrevCustomers = transactions
					.Where(t => t.DateTime < startDate)
					.Select(t => t.CustomerId);

				var dailyTransactions = transactions
					.Where(t => t.DateTime >= startDate && t.DateTime < endDate)
					.ToList();

				var newUsersAmount = dailyTransactions
					.Where(t => !allPrevCustomers.Contains(t.CustomerId))
					.Sum(t => t.Amount);

				var returningUsersAmount = dailyTransactions
					.Where(t => allPrevCustomers.Contains(t.CustomerId))
					.Sum(t => t.Amount);

				newUsersAmounts.Add(newUsersAmount);
				returningUsersAmounts.Add(returningUsersAmount);
			}

			newUsersAmounts.Reverse();
			returningUsersAmounts.Reverse();

			hashtable.Add("labels", labels);
			hashtable.Add("newUsersAmounts", newUsersAmounts);
			hashtable.Add("returningUsersAmounts", returningUsersAmounts);

			return hashtable;
		}

		public async Task<Hashtable[]> GetSalesReport(PeriodDto periodDto)
		{
			var transactions = await _firebaseService
				.GetCollectionOfType<Transaction>(Core.Models.Enums.FirebaseDataNodes.Transaction,
				new FilteringOptions()
				{
					StartDate = periodDto.StartDate,
					EndDate = periodDto.EndDate
				});

			Hashtable[] hashtablesData = new Hashtable[transactions.Count()];

			int count = 0;
			foreach (var transaction in transactions)
			{
				Hashtable hashtable = new Hashtable();

				AppUser appUser = await _accountService.GetUserFromId(transaction.CustomerId);

				#region Purchase
				//ID
				AddToHashtable(hashtable, "Id", transaction.Id);
				//DateTime
				AddToHashtable(hashtable, "Date", transaction.DateTime.ToString());
				//Customer
				AddToHashtable(hashtable, "Customer", $"{appUser.Email}");
				//Package
				AddToHashtable(hashtable, "Item", transaction.ItemTitle);
				//Price
				AddToHashtable(hashtable, "Price", transaction.Amount);

				hashtablesData[count] = hashtable;

				count++;
				#endregion
			}

			return hashtablesData;
		}

		private void AddToHashtable(Hashtable hashtable, string key, object value)
		{
			if (value != null)
			{
				hashtable.Add(key, value);
			}
		}
	}
}
