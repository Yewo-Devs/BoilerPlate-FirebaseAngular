import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationResultRoutingModule } from './verification-result-routing.module';
import { VerificationResultComponent } from './verification-result.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VerificationResultComponent],
  imports: [CommonModule, VerificationResultRoutingModule, RouterModule],
})
export class VerificationResultModule {}
