import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../token-request/token-request.module').then(
        (m) => m.TokenRequestModule
      ),
  },
  {
    path: 'reset',
    loadChildren: () =>
      import('../password-reset/password-reset.module').then(
        (m) => m.PasswordResetModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordResetShellRoutingModule {}
