import { NgModule } from '@angular/core';
import { PaymentResultComponent } from './payment-result.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PaymentResultComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentResultRoutingModule {}
