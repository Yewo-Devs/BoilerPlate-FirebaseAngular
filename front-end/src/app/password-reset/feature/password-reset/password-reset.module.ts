import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordResetRoutingModule } from './password-reset-routing.module';
import { PasswordResetComponent } from './password-reset.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';

@NgModule({
  declarations: [PasswordResetComponent],
  imports: [
    CommonModule,
    PasswordResetRoutingModule,
    SharedUiModule,
    ReactiveFormsModule,
  ],
})
export class PasswordResetModule {}
