namespace API.Core.Models.Purchases
{
	public class Subscription
	{
		public string Id { get; set; }
		public string SubscriptionId { get; set; }
		public string CustomerId { get; set; }
		/// <summary>
		/// User Ids of all users covered under this subscription
		/// </summary>
		public string[] MemberIds { get; set; }
		public string ItemTitle { get; set; }
		public string ItemDescription { get; set; }
		public string Interval { get; set; }
		public string Currency { get; set; }
		public decimal Price { get; set; }
		public DateTime DateTime { get; set; }
		public DateTime ExpiryDate { get; set; }
		public DateTime	CancellationDate { get; set; }
	}
}
