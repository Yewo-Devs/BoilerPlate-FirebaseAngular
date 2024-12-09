namespace API.Core.Models.Purchases
{
	public class Transaction
	{
		public string Id { get; set; }
		public string CustomerId { get; set; }
		public string ItemTitle { get; set; }
		public decimal Amount { get; set; }
		public DateTime DateTime { get; set; }
	}
}
