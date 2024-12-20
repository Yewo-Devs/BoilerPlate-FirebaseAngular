using API.Application.DTO;
using API.Core.Entities;
using API.Core.Models;

namespace API.Application.Interfaces
{
	public interface INotificationService
	{
		Task SendNotification(SendNotificationDto sendNotificationDto);
		Task ArchiveNotification(string	notificationID);
		Task<IEnumerable<Notification>> GetNotifications(string ownerID);
		Task<int> GetNotificationCount(string ownerID);
	}
}
