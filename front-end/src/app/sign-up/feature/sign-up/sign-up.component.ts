import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { Preferences } from '../../../shared/models/preferences';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { Title, Meta } from '@angular/platform-browser';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { RegisterUserDto } from '../../../shared/models/dto/register-user-dto';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private toastService: ToastrService,
    private busyService: BusyService,
    private preferencesService: PreferencesService,
    private authService: SocialAuthService,
    private routerService: Router,
    title: Title,
    meta: Meta
  ) {
    title.setTitle('Create An Account');
    meta.addTags([
      {
        name: 'description',
        content: 'Sign up using your email or other options.',
      },
      {
        name: 'keywords',
        content:
          'Illustrations, Avatars, 3D, Illustration Pack, Download, Free Download, Sign Up, Account',
      },
    ]);
  }

  userForm: any;

  saasName = environment.saasName;

  ngOnInit(): void {
    this.initializeForm();

    this.authService.authState.subscribe((user) => {
      //Social User Signed In Event

      if (user != null) {
        this.socialLogin(user);
      }
    });
  }

  initializeForm() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  registerUser() {
    let registerUserDto: RegisterUserDto = {
      permissions: [''],
      role: 'User',
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value,
    };

    this.busyService.busy();

    let prefs: Preferences = this.preferencesService.getPreferences();

    this.accountService.registerUser(registerUserDto).subscribe(
      (response) => {
        this.busyService.idle();
        this.toastService.success(
          'We have successfully registered your account!'
        );

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
        //If verify account go to verify account page
        this.busyService.idle();
        if (error.error[0] == '?') {
          this.routerService.navigateByUrl('/verify' + error.error);

          return;
        }

        this.toastService.error(error.error, 'Error');
      }
    );
  }

  socialLogin(user: any) {
    this.busyService.busy();

    let prefs: Preferences = this.preferencesService.getPreferences();

    let socialLoginDto: any = user;

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
