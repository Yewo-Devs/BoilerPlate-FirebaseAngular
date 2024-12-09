using API.Application.DTO;
using API.Core.Models.Purchases;
using IdentityX.Application.Interfaces;
using IdentityX.Core.Entities;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Reflection;

namespace API.Infrastructure.Services
{
	public class EmailService : Application.Interfaces.IEmailService
	{
		private readonly IProfileService _profileService;
		private readonly SendGridClient _sendGridClient;
		private readonly string _emailDomain;

		public EmailService(IProfileService profileService)
		{
			var sendGridApiKey = Environment.GetEnvironmentVariable("SendGrid_ApiKey");

			if (string.IsNullOrEmpty(sendGridApiKey))
			{
				throw new InvalidOperationException("SendGrid API key is not configured.");
			}

			_sendGridClient = new SendGridClient(sendGridApiKey);

			_emailDomain = Environment.GetEnvironmentVariable("Email_Domain");
			_profileService = profileService;
		}

		public async Task SendEmail(string message, string subject, List<string> receipients)
		{
			await SendEmail(message, subject, receipients, $"no-reply@{_emailDomain}");
		}

		public async Task PaymentFailedNotice(Subscription subscription, AppUser appUser)
		{
			var profile = await _profileService.GetUserProfile(appUser.Id);

			var subject = "Subscription Renewal Failure";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location),
				"Presentation/EmailTemplates", "PaymentFailedNotice.html");

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
				{
					{ "firstname", profile.Firstname },
					{ "lastname", profile.Lastname },
					{ "itemTitle", subscription.ItemTitle }
				});

			var fromEmail = $"billing@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { appUser.Email }, fromEmail);
		}

		public async Task SendAccountActivation(string url, AppUser user)
		{
			var subject = "Account Activation";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), 
				"Presentation/EmailTemplates", "AccountActivation.html");

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
				{
					{ "activationUrl", url },
					{ "companyName", "Your Company" },
					{ "companyAddress", "1234 Street, City, State, 12345" }
				});

			var fromEmail = $"no-reply@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { user.Email }, fromEmail);
		}

		public async Task SendCustomerContactFormMessage(CustomerContactFormMessageDto customerContactFormMessageDto)
		{
			var subject = "Customer Contact Form Message";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), 
				"Presentation/EmailTemplates", "CustomerContactFormMessage.html");

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
				{
					{ "name", customerContactFormMessageDto.Name },
					{ "email", customerContactFormMessageDto.Email },
					{ "message", customerContactFormMessageDto.Message }
				});

			var fromEmail = $"no-reply@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { fromEmail }, fromEmail);
		}

		public async Task SendMfaToken(string token, string email)
		{
			var subject = "Your MFA Token";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), 
				"Presentation/EmailTemplates", "MfaToken.html");

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
				{
					{ "token", token }
				});

			var fromEmail = $"no-reply@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { email }, fromEmail);
		}

		public async Task SendPasswordResetLink(string email, string url)
		{
			var subject = "Password Reset";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), 
				"Presentation/EmailTemplates", "PasswordReset.html");

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
				{
					{ "resetUrl", url }
				});

			var fromEmail = $"no-reply@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { email }, fromEmail);
		}

		public async Task SendReceipt(CheckoutDto checkoutDto, AppUser appUser)
		{
			var profile = await _profileService.GetUserProfile(appUser.Id);

			var subject = "Your Receipt";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location), 
				"Presentation/EmailTemplates", "Receipt.html");

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
				{
					{ "firstname", profile.Firstname },
					{ "lastname", profile.Lastname },
					{ "itemTitle", checkoutDto.ItemTitle },
					{ "itemDescription", checkoutDto.ItemDescription },
					{ "price", checkoutDto.Price.ToString() },
					{ "currency", checkoutDto.Currency }
				});

			var fromEmail = $"billing@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { appUser.Email }, fromEmail);
		}

		private async Task SendEmail(string message, string subject, List<string> receipients, string fromEmail)
		{
			var from = new EmailAddress(fromEmail);
			var tos = receipients.Select(email => new EmailAddress(email)).ToList();
			var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, tos, subject, message, message);
			var response = await _sendGridClient.SendEmailAsync(msg);
		}

		private async Task<string> GetEmailTemplate(string templatePath, Dictionary<string, string> placeholders)
		{
			placeholders.Add("emailDomain", _emailDomain);

			var template = await File.ReadAllTextAsync(templatePath);

			foreach (var placeholder in placeholders)
			{
				template = template.Replace($"{{{{{placeholder.Key}}}}}", placeholder.Value);
			}

			return template;
		}
	}
}
