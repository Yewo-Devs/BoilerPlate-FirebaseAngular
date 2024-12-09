import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationRequestRoutingModule } from './verification-request-routing.module';
import { VerificationRequestComponent } from './verification-request.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VerificationRequestComponent],
  imports: [CommonModule, VerificationRequestRoutingModule, RouterModule],
})
export class VerificationRequestModule {}
