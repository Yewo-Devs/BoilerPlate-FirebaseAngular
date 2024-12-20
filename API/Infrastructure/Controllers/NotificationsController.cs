using API.Application.DTO;
using API.Application.Interfaces;
using API.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Infrastructure.Controllers
{
	public class NotificationsController : BaseApiController
	{
		private readonly INotificationService _notificationService;

		public NotificationsController(INotificationService notificationService)
        {
			_notificationService = notificationService;
		}

		[HttpGet("get")]
		public async Task<ActionResult<IEnumerable<Notification>>> GetNotifications([FromQuery] string ownerId)
		{
			return (await _notificationService.GetNotifications(ownerId)).ToArray();
		}

		[HttpGet("get-count")]
		public async Task<ActionResult<int>> GetNotificationCount([FromQuery] string ownerId)
		{
			return await _notificationService.GetNotificationCount(ownerId);
		}

		[HttpPost("send")]
		public async Task SendNotification(SendNotificationDto sendNotificationDto)
		{
			await _notificationService.SendNotification(sendNotificationDto);
		}

		[HttpGet("archive")]
		public async Task ArchiveNotification([FromQuery] string notificationId)
		{
			await _notificationService.ArchiveNotification(notificationId);
		}
	}
}
