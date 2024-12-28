import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../recents/recents.component').then(
            (m) => m.RecentsComponent
          ),
      },
      {
        path: 'library',
        loadComponent: () =>
          import('../library/library.component').then(
            (m) => m.LibraryComponent
          ),
      },
      {
        path: 'trash',
        loadComponent: () =>
          import('../trash/trash.component').then((m) => m.TrashComponent),
      },
      {
        path: 'team',
        loadChildren: () =>
          import('../team/team.module').then((m) => m.TeamModule),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('../notifications/notifications.component').then(
            (m) => m.NotificationsComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
      {
        path: 'billing',
        loadComponent: () =>
          import('../billing/billing.component').then(
            (m) => m.BillingComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
