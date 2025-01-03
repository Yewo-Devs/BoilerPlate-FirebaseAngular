import { Component } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode-service/dark-mode.service';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { environment } from '../../../../environments/environment';
import { TicketService } from '../../../shared/services/ticket-service/ticket.service';

@Component({
  selector: 'app-admin-portal',
  standalone: false,
  templateUrl: './admin-portal.component.html',
  styleUrl: './admin-portal.component.css',
})
export class AdminPortalComponent {
  constructor(
    public darkModeService: DarkModeService,
    private accountService: AccountService,
    private ticketService: TicketService
  ) {
    this.value = darkModeService.isDarkMode()
      ? { icon: 'pi pi-moon', value: 'Dark Mode' }
      : { icon: 'pi pi-sun', value: 'Light Mode' };
  }

  isSidebarOpen: boolean = false;

  value: any = {};

  justifyOptions: any[] = [
    { icon: 'pi pi-sun', value: 'Light Mode' },
    { icon: 'pi pi-moon', value: 'Dark Mode' },
  ];

  googleAnalyticsUrl: string = environment.googleAnalyticsUrl;
  ticketCount: number = 0;

  ngOnInit(): void {
    this.ticketService.getTicketCount().subscribe((count: number) => {
      this.ticketCount = count;
    });
  }

  themeSelect() {
    if (this.value.value === 'Light Mode') {
      this.darkModeService.setLightTheme();
    } else {
      this.darkModeService.setDarkTheme();
    }
  }

  openAnalytics() {
    window.open(this.googleAnalyticsUrl, '_blank');
  }

  logout() {
    this.accountService.logout();
  }
}
