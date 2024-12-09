import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing/feature/landing/landing.component').then(
        (m) => m.LandingComponent
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
    path: 'pricing',
    loadComponent: () =>
      import('./pricing/feature/pricing/pricing.component').then(
        (m) => m.PricingComponent
      ),
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
    path: '**',
    redirectTo: '',
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', // This enables scrolling to anchors as well
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
