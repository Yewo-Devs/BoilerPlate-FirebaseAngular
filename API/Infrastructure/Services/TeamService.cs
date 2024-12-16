using API.Application.DTO;
using API.Application.Interfaces;
using API.Core.Entities;
using API.Core.Models;
using IdentityX.Application.Extensions;
using static API.Core.Models.Enums;

namespace API.Infrastructure.Services
{
	public class TeamService : ITeamService
	{
		private readonly IFirebaseService _firebaseService;
		private readonly IEmailService _emailService;
		private readonly IFirebaseStorageService _firebaseStorageService;

		public TeamService(IFirebaseService firebaseService, IEmailService emailService, IFirebaseStorageService firebaseStorageService)
		{
			_firebaseService = firebaseService;
			_emailService = emailService;
			_firebaseStorageService = firebaseStorageService;
		}

		public async Task AcceptInvite(string teamId, string inviteId, string userId)
		{
			var team = await _firebaseService.GetInstanceOfType<TeamDto>(FirebaseDataNodes.Team, teamId);
			var invite = team.Invites.FirstOrDefault(i => i.Id == inviteId);

			if (invite == null || invite.Revoked)
			{
				throw new InvalidOperationException("Invalid invite.");
			}

			if (invite.Accepted)
				return;

			invite.Accepted = true;
			invite.UpdatedAt = DateTime.UtcNow;

			if(team.Members == null)
				team.Members = new List<TeamMember>();

			//Add Member to Team
			team.Members.Add(new TeamMember
			{
				UserId = userId,
				Role = invite.Role
			});

			await _firebaseService.UpdateData(FirebaseDataNodes.Team, teamId, team);
		}

		public async Task CreateInvitation(CreateInvitationDto createInvitationDto)
		{
			TeamDto team = await GetTeamByIdAsync(createInvitationDto.TeamId);

			if (team == null)
			{
				throw new InvalidOperationException("Team not found.");
			}

			if(team.Invites == null)
				team.Invites = new List<TeamInvite>();

			var teamInvite = new TeamInvite
			{
				Id = Guid.NewGuid().ToString(),
				Email = createInvitationDto.Email,
				Role = createInvitationDto.Role,
				Accepted = false,
				Revoked = false,
				CreatedAt = DateTime.UtcNow,
				UpdatedAt = DateTime.UtcNow
			};

			team.Invites.Add(teamInvite);

			await _emailService.SendTeamInvitation(team, teamInvite.Id, createInvitationDto);

			await _firebaseService.UpdateData(FirebaseDataNodes.Team, team.Id, team);
		}

		public async Task<TeamDto> CreateTeamAsync(CreateTeamDto createTeamDto)
		{
			var team = new Team
			{
				Id = Guid.NewGuid().ToString(),
				Name = createTeamDto.Name,
				Members = createTeamDto.Members,
				Invites = createTeamDto.Invites,
				TeamPhotoUrl = await StorePhoto(createTeamDto.TeamPhotoUrl)
			};

			await _firebaseService.StoreData(FirebaseDataNodes.Team, team, team.Id);

			return team.Map<TeamDto>();
		}

		private async Task<string> StorePhoto(string photoUrl)
		{
			//If is not base64 string return photoUrl
			if (!photoUrl.Contains("base64"))
			{
				return photoUrl;
			}

			return await _firebaseStorageService
				.StoreProfilePhoto(photoUrl, Guid.NewGuid().ToString(), "teamPhotoUrl");
		}

		public async Task DeleteTeamAsync(string id)
		{
			await _firebaseService.DeleteData(FirebaseDataNodes.Team, id);
		}

		public async Task<IEnumerable<TeamDto>> GetAllUserTeamsAsync(string userId)
		{
			var teams = await _firebaseService.GetCollectionOfType<TeamDto>(FirebaseDataNodes.Team);

			return teams.Where(t => t.Members.Any(m => m.UserId == userId));
		}

		public async Task<TeamDto> GetTeamByIdAsync(string id)
		{
			return await _firebaseService.GetInstanceOfType<TeamDto>(FirebaseDataNodes.Team, id);
		}

		public async Task UpdateTeamAsync(UpdateTeamDto updateTeamDto)
		{
			var team = await _firebaseService.GetInstanceOfType<Team>(FirebaseDataNodes.Team, updateTeamDto.Id);

			if (team == null)
			{
				throw new InvalidOperationException("Team not found.");
			}

			team.Name = updateTeamDto.Name;
			team.Members = updateTeamDto.Members;
			team.Invites = updateTeamDto.Invites;

			await _firebaseService.UpdateData(FirebaseDataNodes.Team, updateTeamDto.Id, team);
		}
	}
}
