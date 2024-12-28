import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideRouter, withRouterConfig } from '@angular/router';
import { SocialSignOnModule } from './shared/social-sign-on/social-sign-on.module';
import { SharedModule } from './shared/shared.module';
import { appRoutes, routerOptions } from './app.routes';
import { ThemePreset } from './theme-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: ThemePreset,
        options: {
          ripple: true,
          prefix: 'prime',
          darkModeSelector: '.dark',
        },
      },
    }),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserModule,
      NgxSpinnerModule,
      SocialSignOnModule,
      SharedModule
    ),
    provideRouter(appRoutes, withRouterConfig(routerOptions)),
  ],
};
