import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreferencesService } from '../../services/preferences-service/preferences.service';
import { UserDto } from '../../models/dto/user-auth/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountManagementGuard implements CanActivate {
  constructor(
    private preferencesService: PreferencesService,
    private toastService: ToastrService
  ) {}

  canActivate(): boolean {
    let user: UserDto = this.preferencesService.getPreferences().user;

    if (user) {
      if (!user.permissions.includes('Account Management')) {
        this.toastService.error('You are unauthorized!');
      }

      return user.permissions.includes('Account Management');
    }

    this.toastService.error('You are unauthorized!');
    return false;
  }
}
