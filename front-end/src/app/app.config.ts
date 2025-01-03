import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter, withRouterConfig } from '@angular/router';
import { appRoutes, routerOptions } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
  BrowserModule,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { SocialSignOnModule } from './shared/social-sign-on/social-sign-on.module';
import { SharedModule } from './shared/shared.module';
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
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    importProvidersFrom(BrowserModule, SocialSignOnModule, SharedModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes, withRouterConfig(routerOptions)),
    provideClientHydration(withEventReplay()),
  ],
};
