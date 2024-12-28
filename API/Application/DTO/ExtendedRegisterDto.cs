using IdentityX.Application.DTO.Users;

namespace API.Application.DTO
{
	public class ExtendedRegisterDto: RegisterDto
	{
		public bool RequireEmailVerification { get; set; } = true;
	}
}
