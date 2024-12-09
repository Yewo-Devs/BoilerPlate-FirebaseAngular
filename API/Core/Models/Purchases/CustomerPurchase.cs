using static API.Core.Models.Enums;

namespace API.Core.Models.Purchases
{
	public class CustomerPurchase
	{
		public string Id { get; set; }
		public string CustomerId { get; set; }
		public string ItemTitle { get; set; }
		public string ItemDescription { get; set; }
		public string Currency { get; set; }
		public decimal Price { get; set; }		
		public PaymentTypes PaymentType { get; set; }
		public bool FreeTrial { get; set; }
		public int FreeTrialPeriodDays { get; set; }
		public DateTime DateTime { get; set; }
	}
}
