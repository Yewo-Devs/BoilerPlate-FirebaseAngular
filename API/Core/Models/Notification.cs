namespace API.Core.Models
{
	public class Notification
	{
		public string ID { get; set; }
        public string OwnerID { get; set; }
		public string Title { get; set; }
		public string Message { get; set; }
		public string ActionUrl { get; set; }
		public DateTime DateTime { get; set; }
        public bool Archived { get; set; }
    }
}
