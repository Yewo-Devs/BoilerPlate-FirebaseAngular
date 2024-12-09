import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { GoogleSigninModule } from '../../../shared/ui/google-signin/google-signin.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedUiModule,
    GoogleSigninModule,
  ],
})
export class LoginModule {}
