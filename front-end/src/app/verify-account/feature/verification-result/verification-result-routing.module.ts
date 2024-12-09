import { NgModule } from '@angular/core';
import { VerificationResultComponent } from './verification-result.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: VerificationResultComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationResultRoutingModule {}
