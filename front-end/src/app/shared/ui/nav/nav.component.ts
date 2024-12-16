import { Component } from '@angular/core';
import { ProfileDto } from '../../models/dto/user-auth/profile-dto';
import { PreferencesService } from '../../services/preferences-service/preferences.service';
import { AccountService } from '../../services/account-service/account.service';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  expanded = false;
  profile: ProfileDto;

  constructor(
    private preferencesService: PreferencesService,
    private accountService: AccountService
  ) {
    this.profile = preferencesService.getPreferences().profile;
  }

  logout() {
    this.accountService.logout();
  }
}
