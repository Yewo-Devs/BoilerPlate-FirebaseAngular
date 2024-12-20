using API.Application.DTO;
using API.Application.Interfaces;
using API.Core.Models;
using IdentityX.Application.Extensions;
using IdentityX.Application.Interfaces;
using static API.Core.Models.Enums;
using IEmailService = API.Application.Interfaces.IEmailService;

namespace API.Infrastructure.Services
{
	public class NotificationService : INotificationService
	{
		private readonly IFirebaseService _firebaseService;
		private readonly IEmailService _emailService;
		private readonly IAccountService _accountService;

		public NotificationService(IFirebaseService firebaseService, IEmailService emailService, 
			IAccountService accountService)
        {
			_firebaseService = firebaseService;
			_emailService = emailService;
			_accountService = accountService;
		}
        public async Task ArchiveNotification(string notificationID)
		{
			var notification = await _firebaseService
				.GetInstanceOfType<Notification>(FirebaseDataNodes.Notification, notificationID);

			notification.Archived = true;

			await _firebaseService.UpdateData(FirebaseDataNodes.Notification, notificationID, notification);
		}

		public async Task<int> GetNotificationCount(string ownerID)
		{
			var notifications = await GetNotifications(ownerID);

			notifications = notifications.Where(n => !n.Archived);

			return notifications.Count();
		}

		public async Task<IEnumerable<Notification>> GetNotifications(string ownerID)
		{
			var result = await _firebaseService.GetCollectionOfType<Notification>(FirebaseDataNodes.Notification);

			return result.Where(i => i.OwnerID == ownerID);
		}

		public async Task SendNotification(SendNotificationDto sendNotificationDto)
		{
			Notification notification = sendNotificationDto.Map<Notification>();

			notification.DateTime = DateTime.UtcNow;
			notification.Archived = false;

			await _firebaseService.StoreData(FirebaseDataNodes.Notification, notification, null, true);

			var user = await _accountService.GetUserFromId(sendNotificationDto.OwnerID);

			string _saasName = Environment.GetEnvironmentVariable("SaaS_Name");

			await _emailService.SendEmail("You have received new notifications.", 
				$"{_saasName} Notifications", new List<string>(){ user.Email });
		}
	}
}
