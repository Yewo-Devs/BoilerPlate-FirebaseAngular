import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PreferencesService } from '../services/preferences-service/preferences.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private preferencesService: PreferencesService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.preferencesService.getPreferences().user != null) {
      let token = this.preferencesService.getPreferences().user.token;

      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
