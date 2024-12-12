import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccountService } from '../services/account-service/account.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { PreferencesService } from '../services/preferences-service/preferences.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private accountService: AccountService,
    private preferencesService: PreferencesService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          const token = this.preferencesService.getPreferences().user.token;
          if (token && this.isTokenExpired(token)) {
            // Refresh token
            this.accountService.refreshToken().subscribe(
              (response) => {
                request = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${response.token}`,
                  },
                });
                // If refresh token is successful, retry the request
                return next.handle(request);
              },
              (error) => {
                // If refresh token fails, logout the user
                this.accountService.logout();

                // Redirect to login page
                this.router.navigateByUrl('/sign-in');
              }
            );
          } else {
            // If token is not expired, logout the user
            this.accountService.logout();

            // Redirect to login page
            this.router.navigateByUrl('/sign-in');
          }
        }
        return throwError(error);
      })
    );
  }

  private isTokenExpired(token: string): boolean {
    const decoded: any = jwtDecode(token);
    const expirationDate = decoded.exp * 1000;
    return expirationDate < Date.now();
  }
}
