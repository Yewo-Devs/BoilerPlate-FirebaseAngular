using API.Core.Models;

namespace API.Application.DTO
{
	public class CreateTeamDto
	{
		/// <summary>
		/// The team's photo url
		/// </summary>
		public string TeamPhotoUrl { get; set; }
		public string Name { get; set; }
		/// <summary>
		/// The members of the team
		/// </summary>
		public List<TeamMember> Members { get; set; }
		/// <summary>
		/// The invites to the team
		/// </summary>
		public List<TeamInvite> Invites { get; set; }
	}
}
