using API.Application.DTO;

namespace API.Application.Interfaces
{
	public interface ITeamService
	{
		Task CreateInvitation(CreateInvitationDto createInvitationDto);
		Task<TeamDto> GetTeamByIdAsync(string Id);
		Task<IEnumerable<TeamDto>> GetAllUserTeamsAsync(string UserId);
		Task<TeamDto> CreateTeamAsync(CreateTeamDto createTeamDto);
		Task UpdateTeamAsync(UpdateTeamDto updateTeamDto);
		Task DeleteTeamAsync(string Id);
		Task AcceptInvite(string TeamId, string InviteId, string userId);
	}
}