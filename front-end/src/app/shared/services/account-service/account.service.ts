import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { PreferencesService } from '../preferences-service/preferences.service';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { EditUserDto } from '../../models/dto/user-auth/edit-user-dto';
import { LoginDto } from '../../models/dto/user-auth/login-dto';
import { PasswordResetDto } from '../../models/dto/user-auth/password-reset-dto';
import { RegisterUserDto } from '../../models/dto/user-auth/register-user-dto';
import { UserDto } from '../../models/dto/user-auth/user-dto';
import { RefreshAuthDto } from '../../models/dto/user-auth/refresh-auth-dto';

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

  socialLogin(user: any) {
    return this.httpClient
      .post(environment.apiUrl + 'account/social-login', user)
      .pipe(
        map((response: any) => {
          this.setUser(response);
          return response;
        })
      );
  }

  login(loginDto: LoginDto) {
    return this.httpClient
      .post(environment.apiUrl + 'account/login', loginDto)
      .pipe(
        map((response: any) => {
          this.setUser(response);
          return response;
        })
      );
  }

  refreshToken() {
    let refreshToken =
      this.preferencesService.getPreferences().user.refreshToken;

    let refreshAuthDto: RefreshAuthDto = {
      accountId: this.preferencesService.getPreferences().user.id,
      refreshToken: refreshToken,
      keepLoggedIn: this.preferencesService.getPreferences().keepLoggedIn,
    };

    return this.httpClient
      .post(environment.apiUrl + 'account/refresh-token', refreshAuthDto)
      .pipe(
        map((response: any) => {
          this.setUser(response);
          return response;
        })
      );
  }

  registerUser(registerUserDto: RegisterUserDto) {
    return this.httpClient
      .post(environment.apiUrl + 'account/register', registerUserDto)
      .pipe(
        map((response: any) => {
          this.setUser(response);
          return response;
        })
      );
  }

  logout() {
    this.setUser(null);
    this.authService.signOut();

    let prefs = this.preferencesService.getPreferences();
    prefs.user = null;
    prefs.keepLoggedIn = null;
    prefs.profile = null;

    this.preferencesService.setPreferences(prefs);

    // if current page is '/' reload page
    if (this.routerService.url === '/') {
      this.routerService.navigateByUrl('/').then(() => {
        window.location.reload();
      });
    } else {
      this.routerService.navigateByUrl('/');
    }
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
          this.setUser(response);
          return response;
        })
      );
  }

  tokenRequest(email: string) {
    return this.httpClient.get(
      environment.apiUrl + 'account/password-reset-request?email=' + email,
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
