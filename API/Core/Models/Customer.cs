namespace API.Core.Models
{
	public class Customer
	{
		public string PhotoUrl { get; set; }
		public string FullName { get; set; }
		public string Email { get; set; }
		public string Currency { get; set; }
		public decimal Amount { get; set; }
		public string Location { get; set; }
	}
}
