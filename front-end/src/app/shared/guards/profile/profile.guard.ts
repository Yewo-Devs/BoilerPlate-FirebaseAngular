import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { PreferencesService } from '../../services/preferences-service/preferences.service';
import { ProfileDto } from '../../models/dto/user-auth/profile-dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
  constructor(
    private preferencesService: PreferencesService,
    private routerService: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let profile: ProfileDto = this.preferencesService.getPreferences().profile;

    if (profile != null) {
      return true;
    }

    let prefs = this.preferencesService.getPreferences();
    prefs.nextPage = state.url;

    this.preferencesService.setPreferences(prefs);

    this.routerService.navigateByUrl('/profile-onboarding');
    return false;
  }
}
