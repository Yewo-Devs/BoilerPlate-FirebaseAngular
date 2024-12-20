import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { environment } from '../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { NotificationService } from '../../../shared/services/notification-service/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: false,
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  value: any = { icon: 'pi pi-sun', justify: 'Light Mode' };

  justifyOptions: any[] = [
    { icon: 'pi pi-sun', justify: 'Light Mode' },
    { icon: 'pi pi-moon', value: 'Dark Mode' },
  ];

  user = this.preferencesService.getPreferences().user;
  profile = this.preferencesService.getPreferences().profile;
  saasName = environment.saasName;
  notificationCount: number = 0;

  constructor(
    private preferencesService: PreferencesService,
    private notificationService: NotificationService,
    private accountService: AccountService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.notificationService
      .getNotificationCount(this.user.id)
      .subscribe((response: number) => {
        this.notificationCount = response;
      });
  }

  share() {
    if (navigator.share) {
      navigator
        .share({
          title: this.saasName,
          text: 'Check out this app!',
          url: window.location.origin,
        })
        .then(() => {})
        .catch((error) => {});
    } else {
      //Copy url to clipboard
      navigator.clipboard.writeText(window.location.origin);
      //Show toast message
      this.toastService.success('Link copied to clipboard');
    }
  }

  logout() {
    this.accountService.logout();
  }
}
