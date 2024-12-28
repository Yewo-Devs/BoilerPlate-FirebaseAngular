import { NgModule } from '@angular/core';
import { AdminPortalComponent } from './admin-portal.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminPortalComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
      {
        path: 'tickets',
        loadComponent: () =>
          import('../ticket/ticket.component').then((m) => m.TicketComponent),
      },
      {
        path: 'register-user',
        loadComponent: () =>
          import('../register-user/register-user.component').then(
            (m) => m.RegisterUserComponent
          ),
      },
      {
        path: 'edit-user',
        loadComponent: () =>
          import('../edit-user/edit-user.component').then(
            (m) => m.EditUserComponent
          ),
      },
      {
        path: 'sales-report',
        loadComponent: () =>
          import('../sales-report/sales-report.component').then(
            (m) => m.SalesReportComponent
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPortalRoutingModule {}
