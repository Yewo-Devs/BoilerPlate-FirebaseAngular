using API.Core.Models;
using API.Core.Models.Purchases;
using System.Collections;

namespace API.Application.DTO
{
	public class DashboardDto
	{
		public string Currency { get; set; }

		public DashboardAmountDto SalesToday { get; set; }
		public DashboardAmountDto TotalSales { get; set; }
		public DashboardAmountDto AverageSale { get; set; }
		public DashboardAmountDto TotalCustomers { get; set; }

		public Hashtable SalesReport12Month { get; set; }
		public Hashtable SalesReport6Month { get; set; }
		public Hashtable SalesReport30Days { get; set; }
		public Hashtable SalesReport7Days { get; set; }

		public Hashtable TrafficSources12Month { get; set; }
		public Hashtable TrafficSources6Month { get; set; }
		public Hashtable TrafficSources30Days { get; set; }
		public Hashtable TrafficSources7Days { get; set; }

		public Customer[] RecentCustomers { get; set; }

		public Transaction[] RecentTransactions { get; set; }
	}

	public class DashboardAmountDto
	{
		public decimal Amount { get; set; }
		public bool PositiveChange { get; set; }
		public decimal Change { get; set; }
	}
}
