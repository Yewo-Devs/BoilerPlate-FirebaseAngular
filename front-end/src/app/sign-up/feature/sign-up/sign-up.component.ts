import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { Preferences } from '../../../shared/models/preferences';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { RegisterUserDto } from '../../../shared/models/dto/user-auth/register-user-dto';
import { environment } from '../../../../environments/environment';
import { CreateUserProfileDto } from '../../../shared/models/dto/user-auth/create-user-profile-dto';
import { ProfileService } from '../../../shared/services/profile-service/profile.service';
import { switchMap, tap } from 'rxjs';

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
    private profileService: ProfileService,
    private toastService: ToastrService,
    private busyService: BusyService,
    private preferencesService: PreferencesService,
    private authService: SocialAuthService,
    private routerService: Router
  ) {}

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
      terms: [false, [Validators.requiredTrue]],
    });
  }

  registerUser() {
    let registerUserDto: RegisterUserDto = {
      permissions: [''],
      role: 'User',
      email: this.userForm.controls.email.value,
      password: this.userForm.controls.password.value,
      requireEmailVerification: true,
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
        prefs.keepLoggedIn = false;

        this.preferencesService.setPreferences(prefs);

        this.accountService.setUser(response);

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
    socialLoginDto.role = 'User';
    socialLoginDto.permissions = [];

    this.accountService
      .socialLogin(socialLoginDto)
      .pipe(
        tap(() => this.busyService.idle()),
        tap((response: any) => {
          prefs.user = response;
          prefs.keepLoggedIn = socialLoginDto.keepLoggedIn;
          this.preferencesService.setPreferences(prefs);
          this.accountService.setUser(response);
        }),
        switchMap((response: any) => {
          const createProfileDto: CreateUserProfileDto = {
            userId: response.id,
            firstName: user.firstName,
            lastName: user.lastName,
            photoUrl: user.photoUrl,
          };
          return this.profileService
            .createProfile(createProfileDto)
            .pipe(switchMap(() => this.profileService.getProfile(response.id)));
        })
      )
      .subscribe(
        (profileResponse: any) => {
          prefs.profile = profileResponse;
          this.preferencesService.setPreferences(prefs);

          if (prefs.nextPage) {
            this.routerService.navigateByUrl(prefs.nextPage);
            prefs.nextPage = null;
            this.preferencesService.setPreferences(prefs);
          } else {
            this.routerService.navigateByUrl('/dashboard');
          }
        },
        (error: any) => {
          // Handle error appropriately
          console.error('Error during social login process', error);
        }
      );
  }
}
