import { ExtraOptions, Route } from '@angular/router';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { AdminGuard } from './shared/guards/admin/admin.guard';
import { ProfileGuard } from './shared/guards/profile/profile.guard';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/feature/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./support/feature/support/support.component').then(
        (m) => m.SupportComponent
      ),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./login/feature/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./sign-up/feature/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'password-reset',
    loadComponent: () =>
      import(
        './password-reset/feature/token-request/token-request.component'
      ).then((m) => m.TokenRequestComponent),
  },
  {
    path: 'reset-password',
    loadComponent: () =>
      import(
        './password-reset/feature/password-reset/password-reset.component'
      ).then((m) => m.PasswordResetComponent),
  },
  {
    path: 'verify',
    loadChildren: () =>
      import(
        './verify-account/feature/verification-request/verification-request.module'
      ).then((m) => m.VerificationRequestModule),
  },
  {
    path: 'verification-result',
    loadChildren: () =>
      import(
        './verify-account/feature/verification-result/verification-result.module'
      ).then((m) => m.VerificationResultModule),
  },
  {
    path: 'dashboard',
    canActivate: [ProfileGuard],
    loadChildren: () =>
      import('./dashboard/feature/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'profile-onboarding',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import(
        './profile/feature/profile-onboarding/profile-onboarding.component'
      ).then((m) => m.ProfileOnboardingComponent),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pricing/feature/pricing/pricing.component').then(
        (m) => m.PricingComponent
      ),
  },
  {
    path: 'payment-result',
    loadComponent: () =>
      import(
        './payment-result/feature/payment-result/payment-result.component'
      ).then((m) => m.PaymentResultComponent),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./privacy/feature/privacy/privacy.component').then(
        (m) => m.PrivacyComponent
      ),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./terms/feature/terms/terms.component').then(
        (m) => m.TermsComponent
      ),
  },
  {
    path: 'admin-portal',
    canActivate: [AdminGuard],
    loadChildren: () =>
      import('./admin-portal/feature/admin-portal/admin-portal.module').then(
        (m) => m.AdminPortalModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', // This enables scrolling to anchors as well
};
