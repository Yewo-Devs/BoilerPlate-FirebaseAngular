using static API.Core.Models.Enums;

namespace API.Application.DTO
{
	public class UpdateSubscriptionDto
	{
		public string CustomerId { get; set; }
		public string ItemTitle { get; set; }
		public string ItemDescription { get; set; }
		public string Currency { get; set; }
		public decimal Price { get; set; }
		public decimal PricePerUser { get; set; }
		public int NumberOfUsers { get; set; }
		public PaymentTypes PaymentType { get; set; }
		/// <summary>
		/// Subscription interval. Default is month. (day, week, month, year)
		/// </summary>
		public string SubscriptionInterval { get; set; } = "month";
		public DateTime DateTime { get; set; }
	}
}
