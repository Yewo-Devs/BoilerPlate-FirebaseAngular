import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { GoogleSigninModule } from '../../../shared/ui/google-signin/google-signin.module';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedUiModule,
    ReactiveFormsModule,
    GoogleSigninModule,
  ],
  providers: [],
})
export class SignUpModule {}
