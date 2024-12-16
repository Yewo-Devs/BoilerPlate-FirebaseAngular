import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PreferencesService } from '../../services/preferences-service/preferences.service';
import { UserDto } from '../../models/dto/user-auth/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private preferencesService: PreferencesService,
    private toastService: ToastrService,
    private routerService: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let user: UserDto = this.preferencesService.getPreferences().user;

    if (user != null) {
      return true;
    }

    let prefs = this.preferencesService.getPreferences();

    if (!prefs.nextPage.includes('team')) {
      prefs.nextPage = state.url;

      this.preferencesService.setPreferences(prefs);
    }

    this.toastService.error('You need to sign in first.');
    this.routerService.navigateByUrl('/sign-in');
    return false;
  }
}
