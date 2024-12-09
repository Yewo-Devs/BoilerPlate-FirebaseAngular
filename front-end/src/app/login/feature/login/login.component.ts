import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Preferences } from '../../../shared/models/preferences';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { Title, Meta } from '@angular/platform-browser';
import { LoginDto } from '../../../shared/models/dto/login-dto';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private preferencesService: PreferencesService,
    private toastService: ToastrService,
    private busyService: BusyService,
    private routerService: Router,
    private authService: SocialAuthService,
    title: Title,
    meta: Meta
  ) {
    title.setTitle('Sign In To Your Account');

    meta.addTags([
      {
        name: 'description',
        content: 'Sign into your account to access your illustrations.',
      },
      {
        name: 'keywords',
        content:
          'Illustrations, Avatars, 3D, Illustration Pack, Download, Free Download, Sign In, Account',
      },
    ]);
  }
  loginForm: any;
  user: SocialUser | undefined;

  saasName = environment.saasName;

  ngOnInit(): void {
    this.initializeForm();

    this.authService.authState.subscribe((user) => {
      //Social User Signed In Event
      this.user = user;

      if (user != null) {
        this.socialLogin();
      }
    });
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      keepLoggedIn: [false],
    });
  }

  login() {
    let loginDto: LoginDto = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
      keepLoggedIn: this.loginForm.controls.keepLoggedIn.value,
    };

    this.busyService.busy();

    let prefs: Preferences = this.preferencesService.getPreferences();

    this.accountService.login(loginDto).subscribe(
      (response) => {
        this.busyService.idle();
        prefs.user = response;

        this.preferencesService.setPreferences(prefs);

        this.accountService.setUser(response);

        if (!prefs.user.package) {
          //Take them to pricing
          this.routerService.navigateByUrl('/pricing');
          return;
        }

        if (prefs.nextPage) {
          this.routerService.navigateByUrl(prefs.nextPage);
          prefs.nextPage = null;

          this.preferencesService.setPreferences(prefs);

          return;
        }

        this.routerService.navigateByUrl('/dashboard');
      },
      (error) => {
        this.busyService.idle();

        //If verify account go to verify account page
        if (error.error[0] == '?') {
          this.routerService.navigateByUrl('/verify' + error.error);

          return;
        }

        this.toastService.error(error.error);
      }
    );
  }

  socialLogin() {
    this.busyService.busy();

    let prefs: Preferences = this.preferencesService.getPreferences();

    let socialLoginDto: any = this.user;

    //Default to keep logged in
    socialLoginDto.keepLoggedIn = true;

    this.accountService.socialLogin(socialLoginDto).subscribe(
      (response: any) => {
        this.busyService.idle();
        prefs.user = response;

        this.preferencesService.setPreferences(prefs);

        this.accountService.setUser(response);

        if (!prefs.user.package) {
          //Take them to pricing
          this.routerService.navigateByUrl('/pricing');
          return;
        }

        if (prefs.nextPage) {
          this.routerService.navigateByUrl(prefs.nextPage);
          prefs.nextPage = null;
          this.preferencesService.setPreferences(prefs);
          return;
        }

        this.routerService.navigateByUrl('/dashboard');
      },
      (error: any) => {
        this.busyService.idle();
        this.toastService.error(error.error);
      }
    );
  }
}
