import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private httpClient: HttpClient) {}

  getNotificationCount(ownerId: string) {
    return this.httpClient.get(
      environment.apiUrl + 'notifications/get-count?ownerId=' + ownerId
    );
  }

  getNotifications(ownerId: string) {
    return this.httpClient.get(
      environment.apiUrl + 'notifications/get?ownerId=' + ownerId
    );
  }

  sendNotification(sendNotifcationDto: any) {
    return this.httpClient.post(
      environment.apiUrl + 'notifications/send',
      sendNotifcationDto
    );
  }

  archiveNotification(notificationId: string) {
    return this.httpClient.get(
      environment.apiUrl +
        'notifications/archive?notificationId=' +
        notificationId
    );
  }
}
