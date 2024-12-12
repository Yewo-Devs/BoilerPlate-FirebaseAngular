using IdentityX.Application.DTO.Users;
using IdentityX.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Infrastructure.Controllers
{
	/// <summary>
	/// Controller for managing user profiles.
	/// </summary>
	public class ProfileController : BaseApiController
	{
		private readonly IProfileService _profileService;

		/// <summary>
		/// Initializes a new instance of the <see cref="ProfileController"/> class.
		/// </summary>
		/// <param name="profileService">The profile service.</param>
		public ProfileController(IProfileService profileService)
		{
			_profileService = profileService;
		}

		/// <summary>
		/// Creates a new user profile.
		/// </summary>
		/// <param name="createUserProfileDto">The DTO containing the user profile data.</param>
		/// <returns>An <see cref="ActionResult"/> indicating the result of the operation.</returns>
		[Authorize]
		[HttpPost("create")]
		public async Task<ActionResult> CreateUserProfile([FromBody] CreateUserProfileDto createUserProfileDto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			await _profileService.CreateUserProfile(createUserProfileDto);
			return Ok();
		}

		/// <summary>
		/// Gets a user profile by user Id.
		/// </summary>
		/// <param name="userId">The user Id.</param>
		/// <returns>An <see cref="ActionResult{ProfileDto}"/> containing the user profile.</returns>
		[Authorize]
		[HttpGet("get")]
		public async Task<ActionResult<ProfileDto>> GetUserProfile([FromQuery] string userId)
		{
			if (string.IsNullOrEmpty(userId))
			{
				return BadRequest("User Id cannot be null or empty.");
			}

			var profile = await _profileService.GetUserProfile(userId);

			return Ok(profile);
		}

		/// <summary>
		/// Edits an existing user profile.
		/// </summary>
		/// <param name="editProfileDto">The DTO containing the updated profile data.</param>
		/// <returns>An <see cref="ActionResult"/> indicating the result of the operation.</returns>
		[Authorize]
		[HttpPost("edit")]
		public async Task<ActionResult> EditUserProfile([FromBody] EditProfileDto editProfileDto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			await _profileService.UpdateUserProfile(editProfileDto);
			return Ok();
		}

		/// <summary>
		/// Deletes a user profile by user Id.
		/// </summary>
		/// <param name="userId">The user Id.</param>
		/// <returns>An <see cref="ActionResult"/> indicating the result of the operation.</returns>
		[Authorize]
		[HttpDelete("delete")]
		public async Task<ActionResult> DeleteUserProfile([FromQuery] string userId)
		{
			if (string.IsNullOrEmpty(userId))
			{
				return BadRequest("User Id cannot be null or empty.");
			}

			await _profileService.DeleteUserProfile(userId);
			return Ok();
		}
	}
}
