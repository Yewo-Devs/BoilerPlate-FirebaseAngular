import { Component } from '@angular/core';
import { ProfileDto } from '../../models/dto/user-auth/profile-dto';
import { PreferencesService } from '../../services/preferences-service/preferences.service';
import { AccountService } from '../../services/account-service/account.service';
import { Router } from '@angular/router';
import { UserDto } from '../../models/dto/user-auth/user-dto';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  expanded = false;
  profile: ProfileDto;
  user: UserDto;

  menuItems = [
    {
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          command: () => {
            this.router.navigateByUrl('/dashboard/profile');
          },
        },
        {
          label: 'Team',
          icon: 'pi pi-users',
          command: () => {
            this.router.navigateByUrl('/dashboard/team');
          },
        },
        {
          label: 'Billing',
          icon: 'pi pi-money-bill',
          command: () => {
            this.router.navigateByUrl('/dashboard/billing');
          },
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => {
            this.logout();
          },
        },
      ],
    },
  ];

  constructor(
    preferencesService: PreferencesService,
    private router: Router,
    private accountService: AccountService
  ) {
    this.profile = preferencesService.getPreferences().profile;
    this.user = preferencesService.getPreferences().user;
    if (!preferencesService.getPreferences().user) {
      return;
    }

    if (preferencesService.getPreferences().user.role == 'Admin') {
      let option = {
        label: 'Admin Portal',
        icon: 'pi pi-user',
        command: () => {
          this.router.navigateByUrl('/admin-portal');
        },
      };

      this.menuItems[0].items = [option, ...this.menuItems[0].items];
    }
  }

  logout() {
    this.accountService.logout();
  }
}
