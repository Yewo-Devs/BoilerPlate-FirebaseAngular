using API.Application.Interfaces;
using IdentityX.Application.DTO.Users;
using IdentityX.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Globalization;

namespace API.Infrastructure.Controllers
{
	/// <summary>
	/// Controller for managing user profiles.
	/// </summary>
	public class ProfileController : BaseApiController
	{
		private readonly IProfileService _profileService;
		private readonly IFirebaseStorageService _firebaseStorageService;

		/// <summary>
		/// Initializes a new instance of the <see cref="ProfileController"/> class.
		/// </summary>
		/// <param name="profileService">The profile service.</param>
		public ProfileController(IProfileService profileService, IFirebaseStorageService firebaseStorageService)
		{
			_profileService = profileService;
			_firebaseStorageService = firebaseStorageService;
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
			//Title case first and last name
			TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;

			createUserProfileDto.FirstName = textInfo.ToTitleCase(createUserProfileDto.FirstName.ToLower());
			createUserProfileDto.LastName = textInfo.ToTitleCase(createUserProfileDto.LastName.ToLower());

			//Prepare images
			string filePath = await StoreProfilePhoto(createUserProfileDto.PhotoUrl);

			createUserProfileDto.PhotoUrl = filePath;

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
			//Title case first and last name
			TextInfo textInfo = CultureInfo.CurrentCulture.TextInfo;

			editProfileDto.FirstName = textInfo.ToTitleCase(editProfileDto.FirstName.ToLower());
			editProfileDto.LastName = textInfo.ToTitleCase(editProfileDto.LastName.ToLower());

			//Prepare images
			string filePath = await StoreProfilePhoto(editProfileDto.PhotoUrl);

			editProfileDto.PhotoUrl = filePath;

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
		
		/// <summary>
		/// Stores the profile photo.
		/// </summary>
		/// <param name="photoUrl"></param>
		/// <returns></returns>
		private async Task<string> StoreProfilePhoto(string photoUrl)
		{
			if(photoUrl == null)
			{
				return "";
			}

			//If is not base64 string return photoUrl
			if (!photoUrl.Contains("base64"))
			{
				return photoUrl;
			}

			return await _firebaseStorageService
				.StoreProfilePhoto(photoUrl, Guid.NewGuid().ToString(), "photoUrl");
		}
	}
}
