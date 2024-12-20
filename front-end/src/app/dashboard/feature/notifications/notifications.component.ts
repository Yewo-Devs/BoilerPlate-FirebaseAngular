import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../shared/services/notification-service/notification.service';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { NotificationDto } from '../../../shared/models/dto/notification/notification-dto';

@Component({
  selector: 'app-notifications',
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent implements OnInit {
  constructor(
    private notificationService: NotificationService,
    private preferencesService: PreferencesService
  ) {}

  notifications: NotificationDto[] = [];

  ngOnInit(): void {
    let user = this.preferencesService.getPreferences().user;

    this.notificationService
      .getNotifications(user.id)
      .subscribe((response: NotificationDto[]) => {
        this.notifications = response;
      });
  }

  onAction(actionUrl: string) {
    window.open(actionUrl, '_self');
  }

  onDelete(notification: NotificationDto) {
    notification.archived = true;

    this.notificationService.archiveNotification(notification.id).subscribe();
  }
}
