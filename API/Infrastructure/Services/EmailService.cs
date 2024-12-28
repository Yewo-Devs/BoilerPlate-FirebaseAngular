using API.Application.DTO;
using API.Application.Interfaces;
using API.Core.Models.Purchases;
using IdentityX.Application.Interfaces;
using IdentityX.Core.Entities;
using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Reflection;

namespace API.Infrastructure.Services
{
	public class EmailService : Application.Interfaces.IEmailService
	{
		private readonly IProfileService _profileService;
		private readonly ICloudflareService _cloudflareService;
		private readonly SendGridClient _sendGridClient;
		private readonly string _emailDomain;
		private readonly string _applicationDomain;
		private readonly string _companyAddress;
		private readonly string _saasName;
		private readonly string _logoUrl;

		public EmailService(IProfileService profileService, ICloudflareService cloudflareService)
		{
			var sendGridApiKey = Environment.GetEnvironmentVariable("SendGrid_ApiKey");

			_sendGridClient = new SendGridClient(sendGridApiKey);

			_emailDomain = Environment.GetEnvironmentVariable("Email_Domain");
			_applicationDomain = Environment.GetEnvironmentVariable("Application_Domain");
			_companyAddress = Environment.GetEnvironmentVariable("Company_Address");
			_saasName = Environment.GetEnvironmentVariable("SaaS_Name");
			_logoUrl = Environment.GetEnvironmentVariable("Logo_Url");

			_profileService = profileService;
			_cloudflareService = cloudflareService;

			Initialize();
		}

		private async void Initialize()
		{
			await AuthenticateDomain(_emailDomain);
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
					{ "firstname", profile.FirstName },
					{ "lastname", profile.LastName },
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
			var toEmail = $"support@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { toEmail }, fromEmail);
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
					{ "firstname", profile.FirstName },
					{ "lastname", profile.LastName },
					{ "itemTitle", checkoutDto.ItemTitle },
					{ "itemDescription", checkoutDto.ItemDescription },
					{ "price", checkoutDto.Price.ToString() },
					{ "currency", checkoutDto.Currency }
				});

			var fromEmail = $"billing@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { appUser.Email }, fromEmail);
		}

		public async Task SendTeamInvitation(TeamDto teamDto, string inviteId, CreateInvitationDto createInvitationDto)
		{
			var subject = "Team Invitation";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location),
				"Presentation/EmailTemplates", "TeamInvitation.html");

			string url = $"{_applicationDomain}/dashboard/team?teamId={teamDto.Id}&inviteId={inviteId}";

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
			{
					{ "invitationUrl", url },
					{ "teamName", teamDto.Name },
					{ "role", createInvitationDto.Role }
			});

			var fromEmail = $"no-reply@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { createInvitationDto.Email }, fromEmail);
		}

		public async Task SendCustomerSuggestion(CustomerSuggestionDto customerSuggestionDto)
		{
			var subject = "Customer Suggestion";

			var templatePath = Path.Combine(Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location),
				"Presentation/EmailTemplates", "CustomerSuggestion.html");

			var message = await GetEmailTemplate(templatePath, new Dictionary<string, string>
				{
					{ "name", customerSuggestionDto.Name },
					{ "email", customerSuggestionDto.Email },
					{ "message", customerSuggestionDto.Message }
				});

			var fromEmail = $"no-reply@{_emailDomain}";
			var toEmail = $"support@{_emailDomain}";

			await SendEmail(message, subject, new List<string> { toEmail }, fromEmail);
		}

		private async Task AuthenticateDomain(string domain)
		{
			// Check if the domain is already authenticated
			var existingDomainsResponse = await _sendGridClient.RequestAsync(
				method: SendGridClient.Method.GET,
				urlPath: "whitelabel/domains"
			);

			if (!existingDomainsResponse.IsSuccessStatusCode)
			{
				var responseBody = await existingDomainsResponse.Body.ReadAsStringAsync();
				throw new InvalidOperationException($"Failed to retrieve authenticated domains: {responseBody}");
			}

			var existingDomainsBody = await existingDomainsResponse.Body.ReadAsStringAsync();
			var existingDomains = JsonConvert.DeserializeObject<List<DomainAuthResponse>>(existingDomainsBody);

			var existingDomain = existingDomains.FirstOrDefault(d => d.Domain.Equals(domain, StringComparison.OrdinalIgnoreCase));
			if (existingDomain != null)
			{
				// Check if the required DNS records are present and valid
				if (existingDomain.Dns.Mail_cname.Valid && existingDomain.Dns.Dkim1.Valid && existingDomain.Dns.Dkim2.Valid)
				{
					return;
				}
			}

			// Authenticate the domain
			var domainAuthentication = new
			{
				domain,
				automatic_security = true,
				custom_spf = false,
				@default = true
			};

			var response = await _sendGridClient.RequestAsync(
				method: SendGridClient.Method.POST,
				urlPath: "whitelabel/domains",
				requestBody: JsonConvert.SerializeObject(domainAuthentication)
			);

			if (!response.IsSuccessStatusCode)
			{
				var responseBody = await response.Body.ReadAsStringAsync();
				throw new InvalidOperationException($"Failed to authenticate domain: {responseBody}");
			}

			var _responseBody = await response.Body.ReadAsStringAsync();
			var domainAuthResponse = JsonConvert.DeserializeObject<DomainAuthResponse>(_responseBody);

			Console.WriteLine("Adding the following DNS records to your Cloudflare DNS settings:");
			List<DnsRecord> dnsRecords = new List<DnsRecord>() 
			{ domainAuthResponse.Dns.Mail_cname, domainAuthResponse.Dns.Dkim1, domainAuthResponse.Dns.Dkim2 };

			foreach (DnsRecord dnsRecord in dnsRecords)
			{
				Console.WriteLine($"Type: {dnsRecord.Type}, Hostname: {dnsRecord.Host}, Value: {dnsRecord.Data}");
				await _cloudflareService.CreateDnsRecord(domain, dnsRecord.Type, dnsRecord.Host, dnsRecord.Data);
			}

			// Retry cycle for domain verification
			const int maxRetries = 5;
			const int delayMilliseconds = 30000;
			int retryCount = 0;
			bool verified = false;

			while (retryCount < maxRetries && !verified)
			{
				// Await a delay to allow the DNS records to propagate
				await Task.Delay(delayMilliseconds);

				// Verify the domain
				var verifyResponse = await _sendGridClient.RequestAsync(
					method: SendGridClient.Method.POST,
					urlPath: $"whitelabel/domains/{domainAuthResponse.Id}/validate"
				);

				if (verifyResponse.IsSuccessStatusCode)
				{
					verified = true;
					Console.WriteLine($"Domain {domain} has been successfully authenticated and verified with SendGrid.");
				}
				else
				{
					retryCount++;
					if (retryCount == maxRetries)
					{
						var verifyResponseBody = await verifyResponse.Body.ReadAsStringAsync();
						throw new InvalidOperationException($"Failed to verify domain after {maxRetries} attempts: {verifyResponseBody}");
					}
				}
			}
		}

		private async Task SendEmail(string message, string subject, List<string> receipients, string fromEmail)
		{
			var from = new EmailAddress(fromEmail, _saasName);
			var tos = receipients.Select(email => new EmailAddress(email)).ToList();
			var msg = MailHelper.CreateSingleEmailToMultipleRecipients(from, tos, subject, message, message);
			var response = await _sendGridClient.SendEmailAsync(msg);
		}

		private async Task<string> GetEmailTemplate(string templatePath, Dictionary<string, string> placeholders)
		{
			placeholders.Add("logoUrl", _logoUrl);
			placeholders.Add("emailDomain", _emailDomain);
			placeholders.Add("companyName", _saasName);
			placeholders.Add("companyAddress", _companyAddress);

			var template = await File.ReadAllTextAsync(templatePath);

			foreach (var placeholder in placeholders)
			{
				template = template.Replace($"{{{{{placeholder.Key}}}}}", placeholder.Value);
			}

			return template;
		}
	}

	internal class DomainAuthResponse
	{
		public int Id { get; set; }
		public int UserId { get; set; }
		public string Subdomain { get; set; }
		public string Domain { get; set; }
		public string Username { get; set; }
		public bool CustomSpf { get; set; }
		public bool Default { get; set; }
		public bool Legacy { get; set; }
		public bool AutomaticSecurity { get; set; }
		public bool Valid { get; set; }
		public DnsRecords Dns { get; set; }
	}

	internal class DnsRecords
	{
		public DnsRecord Mail_cname { get; set; }
		public DnsRecord Dkim1 { get; set; }
		public DnsRecord Dkim2 { get; set; }
	}

	internal class DnsRecord
	{
		public bool Valid { get; set; }
		public string Type { get; set; }
		public string Host { get; set; }
		public string Data { get; set; }
	}
}
