import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentResultComponent } from './payment-result.component';
import { PaymentResultRoutingModule } from './payment-result-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaymentResultComponent],
  imports: [CommonModule, PaymentResultRoutingModule, RouterModule],
})
export class PaymentResultModule {}
