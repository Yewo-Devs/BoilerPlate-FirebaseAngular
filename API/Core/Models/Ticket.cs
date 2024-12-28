namespace API.Core.Models
{
	public class Ticket
	{
		public string ID { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }
        public bool Archived { get; set; }
		public DateTime CreatedDate { get; set; }
		public DateTime ModifiedDate { get; set; }
		public string CreatedBy { get; set; }
		public string Priority { get; set; }
	}
}
