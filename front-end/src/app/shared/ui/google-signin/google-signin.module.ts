import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninComponent } from './google-signin.component';
import {
  GoogleSigninButtonDirective,
  GoogleSigninButtonModule,
} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [GoogleSigninComponent],
  imports: [CommonModule, GoogleSigninButtonModule],
  providers: [GoogleSigninButtonDirective],
  exports: [GoogleSigninComponent],
})
export class GoogleSigninModule {}
