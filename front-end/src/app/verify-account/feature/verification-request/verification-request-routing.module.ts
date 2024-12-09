import { NgModule } from '@angular/core';
import { VerificationRequestComponent } from './verification-request.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: VerificationRequestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificationRequestRoutingModule {}
