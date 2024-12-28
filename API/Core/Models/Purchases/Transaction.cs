namespace API.Core.Models.Purchases
{
	public class Transaction
	{
		public string Id { get; set; }
		public string CustomerId { get; set; }
		public string Location { get; set; }
		public string ItemTitle { get; set; }
		public decimal Amount { get; set; }
		public string Currency { get; set; }
		public string Status { get; set; } = "Success";
		public DateTime DateTime { get; set; }
	}
}
