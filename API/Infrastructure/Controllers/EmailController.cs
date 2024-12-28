using API.Application.DTO;
using API.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace API.Infrastructure.Controllers
{
	/// <summary>
	/// Controller for managing email-related operations.
	/// </summary>
	public class EmailController : BaseApiController
	{
		private readonly IEmailService _emailService;

		/// <summary>
		/// Initializes a new instance of the <see cref="EmailController"/> class.
		/// </summary>
		/// <param name="emailService">The email service.</param>
		public EmailController(IEmailService emailService)
		{
			_emailService = emailService;
		}

		/// <summary>
		/// Sends a customer contact form message.
		/// </summary>
		/// <param name="customerContactFormMessage">The DTO containing the customer contact form message data.</param>
		/// <returns>An <see cref="ActionResult"/> indicating the result of the operation.</returns>
		[HttpPost("send-customer-contact-form")]
		public async Task<ActionResult> SendCustomerContactFormMessage([FromBody] CustomerContactFormMessageDto customerContactFormMessage)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			await _emailService.SendCustomerContactFormMessage(customerContactFormMessage);
			return Ok();
		}

		/// <summary>
		/// Sends a customer contact form message.
		/// </summary>
		/// <param name="customerContactFormMessage">The DTO containing the customer contact form message data.</param>
		/// <returns>An <see cref="ActionResult"/> indicating the result of the operation.</returns>
		[HttpPost("send-suggestion")]
		public async Task<ActionResult> SendCustomerSuggestion(CustomerSuggestionDto customerSuggestionDto)
		{
			await _emailService.SendCustomerSuggestion(customerSuggestionDto);
			return Ok();
		}
	}
}
