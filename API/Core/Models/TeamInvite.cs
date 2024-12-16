namespace API.Core.Models
{
	public class TeamInvite
	{
		public string Id { get; set; }
		public string Email { get; set; }
		public bool Accepted { get; set; }
		public bool Revoked { get; set; }
		public DateTime CreatedAt { get; set; }
		public DateTime UpdatedAt { get; set; }
		public string Role { get; set; }
	}
}
