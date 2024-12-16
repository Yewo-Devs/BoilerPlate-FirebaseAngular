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
        loadChildren: () =>
          import('../recents/recents.module').then((m) => m.RecentsModule),
      },
      {
        path: 'library',
        loadChildren: () =>
          import('../library/library.module').then((m) => m.LibraryModule),
      },
      {
        path: 'trash',
        loadChildren: () =>
          import('../trash/trash.module').then((m) => m.TrashModule),
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
        path: 'trash',
        loadChildren: () =>
          import('../trash/trash.module').then((m) => m.TrashModule),
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
