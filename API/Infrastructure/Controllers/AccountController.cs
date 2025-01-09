using API.Application.DTO;
using IdentityX.Application.DTO.Users;
using IdentityX.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Infrastructure.Controllers
{
	/// <summary>
	/// Controller for managing user accounts.
	/// </summary>
	public class AccountController : BaseApiController
	{
		private readonly IAccountService _accountService;

		public AccountController(IAccountService accountService)
		{
			_accountService = accountService;
		}

		/// <summary>
		/// Registers a new user.
		/// </summary>
		/// <param name="registerDto">The registration details.</param>
		/// <returns>The registered user.</returns>
		[HttpPost("register")]
		public async Task<ActionResult<UserDto>> Register(ExtendedRegisterDto extendedRegisterDto)
		{
			extendedRegisterDto.Email = extendedRegisterDto.Email.ToLower();

			if (!string.IsNullOrEmpty(extendedRegisterDto.Username))
				extendedRegisterDto.Username = extendedRegisterDto.Username.ToLower();

			var resultObject = await _accountService.Register(extendedRegisterDto, extendedRegisterDto.RequireEmailVerification);

			if (resultObject.Error != "null")
				return BadRequest(resultObject.Error);

			return Ok(resultObject.Result);
		}

		/// <summary>
		/// Gets all users.
		/// </summary>
		/// <returns>A list of users.</returns>
		[Authorize("AdminPolicy")]
		[HttpGet("get-users")]
		public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
		{
			var users = await _accountService.GetUsers();
			return Ok(users);
		}

		/// <summary>
		/// Edits a user.
		/// </summary>
		/// <param name="editUserDto">The user details to edit.</param>
		/// <returns>The edited user.</returns>
		[HttpPost("edit-user")]
		public async Task<ActionResult<UserDto>> EditUser(EditUserDto editUserDto)
		{
			editUserDto.Email = editUserDto.Email.ToLower();

			if (!string.IsNullOrEmpty(editUserDto.Username))
				editUserDto.Username = editUserDto.Username.ToLower();

			var resultObject = await _accountService.EditUser(editUserDto);

			if (resultObject.Error != "null")
				return BadRequest(resultObject.Error);

			return Ok(resultObject.Result);
		}

		/// <summary>
		/// Logs in a user.
		/// </summary>
		/// <param name="loginDto">The login details.</param>
		/// <returns>The logged-in user.</returns>
		[HttpPost("login")]
		public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
		{
			var resultObject = await _accountService.Login(loginDto);

			if (resultObject.Error != "null")
				return Unauthorized(resultObject.Error);

			return Ok(resultObject.Result);
		}

		/// <summary>
		/// Logs in a user using social login.
		/// </summary>
		/// <param name="socialLoginDto">The social login details.</param>
		/// <returns>The logged-in user.</returns>
		[HttpPost("social-login")]
		public async Task<ActionResult<UserDto>> SocialLogin(SocialLoginDto socialLoginDto)
		{
			socialLoginDto.Email = socialLoginDto.Email.ToLower();

			var resultObject = await _accountService.SocialLogin(socialLoginDto);

			if (resultObject.Error != "null")
				return Unauthorized(resultObject.Error);

			return Ok(resultObject.Result);
		}

		/// <summary>
		/// Initiates a password reset request.
		/// </summary>
		/// <param name="email">The user's email.</param>
		/// <param name="username">The user's username.</param>
		/// <returns>A message indicating the result.</returns>
		[HttpGet("password-reset-request")]
		public async Task<ActionResult<string>> ForgotPassword([FromQuery] string? email, [FromQuery] string? username)
		{
			var resultObject = await _accountService.InitiatePasswordReset(email, username);

			if (resultObject.Error != "null")
				return BadRequest(resultObject.Error);

			return Ok(resultObject.Result);
		}

		/// <summary>
		/// Resets the user's password.
		/// </summary>
		/// <param name="passwordResetDto">The password reset details.</param>
		/// <returns>A message indicating the result.</returns>
		[HttpPost("password-reset")]
		public async Task<ActionResult<string>> SetNewPassword(PasswordResetDto passwordResetDto)
		{
			var resultObject = await _accountService.ResetPassword(passwordResetDto);

			if (resultObject.Error != "null")
				return BadRequest(resultObject.Error);

			return Ok(resultObject.Result);
		}

		/// <summary>
		/// Verifies the user's account.
		/// </summary>
		/// <param name="accountId">The account Id.</param>
		/// <param name="token">The verification token.</param>
		/// <returns>A redirect result.</returns>
		[HttpGet("verify")]
		public async Task<IActionResult> VerifyAccount([FromQuery] string accountId, [FromQuery] string token)
		{
			var resultObject = await _accountService.VerifyAccount(accountId, token);

			if (resultObject.Error != "null")
				return new RedirectResult(resultObject.Result);

			return new RedirectResult(resultObject.Result);
		}

		/// <summary>
		/// Generates a new verification token.
		/// </summary>
		/// <param name="accountId">The account Id.</param>
		[HttpGet("update-verification-token")]
		public async Task<IActionResult> GenerateVerificationToken([FromQuery] string accountId)
		{
			await _accountService.GenerateVerificationToken(accountId);
			return NoContent();
		}

		/// <summary>
		/// Generates a new token set.
		/// </summary>
		/// <param name="accountId">refreshAuthDto</param>
		[HttpPost("refresh-token")]
		public async Task<ActionResult<UserDto>> RefreshToken(RefreshAuthDto refreshAuthDto)
		{
			var resultObject = await _accountService.RefreshAuth(refreshAuthDto);

			if (resultObject.Error != "null")
				return Unauthorized(resultObject.Error);

			return Ok(resultObject.Result);
		}
	}
}
