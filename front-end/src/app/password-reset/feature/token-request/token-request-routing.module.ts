import { NgModule } from '@angular/core';
import { TokenRequestComponent } from './token-request.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TokenRequestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenRequestRoutingModule {}
