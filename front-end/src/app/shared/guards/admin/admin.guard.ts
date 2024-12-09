import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreferencesService } from '../../services/preferences-service/preferences.service';
import { UserDto } from '../../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private preferencesService: PreferencesService,
    private toastService: ToastrService,
    private routerService: Router
  ) {}

  canActivate(): boolean {
    let user: UserDto = this.preferencesService.getPreferences().user;

    if (user) {
      return (
        user.permissions.includes('Administrator') ||
        user.permissions.includes('Development')
      );
    }

    let prefs = this.preferencesService.getPreferences();
    prefs.nextPage = this.routerService.url;

    this.preferencesService.setPreferences(prefs);

    this.toastService.error('You are unauthorized!');
    this.routerService.navigateByUrl('/sign-in');

    return false;
  }
}
