namespace API.Application.DTO
{
	public class SendNotificationDto
	{
		public string OwnerID { get; set; }
		public string Title { get; set; }
		public string Message { get; set; }
		public string ActionUrl { get; set; }
	}
}
