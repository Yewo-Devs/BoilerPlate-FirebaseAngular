using Microsoft.AspNetCore.Mvc;
using API.Application.DTO;
using API.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace API.Infrastructure.Controllers
{
    public class TeamController : BaseApiController
    {
        private readonly ITeamService _teamService;

        public TeamController(ITeamService teamService)
        {
            _teamService = teamService;
        }

        [Authorize]
		[HttpPost("invite")]
        public async Task<IActionResult> CreateInvitation(CreateInvitationDto createInvitationDto)
        {
            await _teamService.CreateInvitation(createInvitationDto);
            return Ok();
        }

		[Authorize]
		[HttpGet("get-team")]
        public async Task<IActionResult> GetTeamByIdAsync([FromQuery] string id)
        {
            var team = await _teamService.GetTeamByIdAsync(id);
            if (team == null)
            {
                return NotFound();
            }
            return Ok(team);
        }

		[Authorize]
		[HttpGet("get-user-teams")]
        public async Task<ActionResult<IEnumerable<TeamDto>>> GetAllUserTeamsAsync([FromQuery] string userId)
        {
            var teams = await _teamService.GetAllUserTeamsAsync(userId);

            return teams.ToList();
        }

		[Authorize]
		[HttpPost("create")]
        public async Task<ActionResult<TeamDto>> CreateTeamAsync(CreateTeamDto createTeamDto)
        {
            var team = await _teamService.CreateTeamAsync(createTeamDto);

            return team;
        }

		[Authorize]
		[HttpPut("update")]
        public async Task<IActionResult> UpdateTeamAsync(UpdateTeamDto updateTeamDto)
        {
            await _teamService.UpdateTeamAsync(updateTeamDto);

            return Ok();
        }

		[Authorize]
		[HttpDelete("delete")]
        public async Task<IActionResult> DeleteTeamAsync([FromQuery] string Id)
        {
            await _teamService.DeleteTeamAsync(Id);

            return Ok();
        }

		[Authorize]
		[HttpPut("accept-invite")]
        public async Task<IActionResult> AcceptInvite([FromQuery] string teamId, [FromQuery] string inviteId, [FromQuery] string userId)
        {
            await _teamService.AcceptInvite(teamId, inviteId, userId);

            return Ok();
        }
    }
}
