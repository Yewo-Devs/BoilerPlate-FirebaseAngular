import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PreferencesService } from '../preferences-service/preferences.service';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AnalyticsService } from '../analytics-service/analytics.service';
import { EditUserDto } from '../../models/dto/edit-user-dto';
import { LoginDto } from '../../models/dto/login-dto';
import { PasswordResetDto } from '../../models/dto/password-reset-dto';
import { RegisterUserDto } from '../../models/dto/register-user-dto';
import { UserDto } from '../../models/dto/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private userSubject: BehaviorSubject<UserDto | null>;
  public user$: Observable<UserDto | null>;

  constructor(
    private httpClient: HttpClient,
    private preferencesService: PreferencesService,
    private authService: SocialAuthService,
    private analyticsService: AnalyticsService,
    private routerService: Router
  ) {
    const initialUser = preferencesService.getPreferences().user;
    this.userSubject = new BehaviorSubject<UserDto | null>(initialUser);
    this.user$ = this.userSubject.asObservable();
  }

  user(): UserDto | null {
    return this.userSubject.value;
  }

  public setUser(user: UserDto | null): void {
    this.userSubject.next(user);
  }

  //get-purchases
  getPurchases(userId: any) {
    return this.httpClient
      .get(environment.apiUrl + 'account/get-purchases?userID=' + userId)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  socialLogin(user: any) {
    return this.httpClient
      .post(environment.apiUrl + 'account/social-login', user)
      .pipe(
        map((response: any) => {
          this.setUser(response.user);
          return response;
        })
      );
  }

  login(loginDto: LoginDto) {
    return this.httpClient
      .post(environment.apiUrl + 'account/login', loginDto)
      .pipe(
        map((response: any) => {
          this.setUser(response.user);
          return response;
        })
      );
  }

  registerUser(registerUserDto: RegisterUserDto) {
    return this.httpClient
      .post(environment.apiUrl + 'account/register', registerUserDto)
      .pipe(
        map((response: any) => {
          this.setUser(response.user);
          return response;
        })
      );
  }

  logout() {
    this.setUser(null);
    this.authService.signOut();

    let prefs = this.preferencesService.getPreferences();
    prefs.user = null;

    this.preferencesService.setPreferences(prefs);

    this.analyticsService.trackEvent(
      'Account Sign Out',
      '',
      'Customer Interaction'
    );

    this.routerService.navigateByUrl('/sign-in');
  }

  getUsers() {
    return this.httpClient.get(environment.apiUrl + 'account/get-users').pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  resendVerificationEmail(accountId: string) {
    return this.httpClient.get(
      environment.apiUrl +
        'account/update-verification-token?accountId=' +
        accountId
    );
  }

  editUser(editUserDto: EditUserDto) {
    return this.httpClient
      .post(environment.apiUrl + 'account/edit-user', editUserDto)
      .pipe(
        map((response: any) => {
          this.setUser(response.user);
          return response;
        })
      );
  }

  tokenRequest(accountID: string) {
    return this.httpClient.get(
      environment.apiUrl + 'account/token-request?accountID=' + accountID,
      {
        responseType: 'text',
      }
    );
  }

  passwordReset(passwordResetDto: PasswordResetDto) {
    return this.httpClient.post(
      environment.apiUrl + 'account/password-reset',
      passwordResetDto,
      {
        responseType: 'text',
      }
    );
  }
}
