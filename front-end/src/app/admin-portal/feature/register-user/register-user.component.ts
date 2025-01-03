import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { ProfileService } from '../../../shared/services/profile-service/profile.service';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { RegisterUserDto } from '../../../shared/models/dto/user-auth/register-user-dto';
import { CreateUserProfileDto } from '../../../shared/models/dto/user-auth/create-user-profile-dto';

@Component({
  selector: 'app-register-user',
  imports: [ReactiveFormsModule, SharedUiModule, MultiSelectModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
})
export class RegisterUserComponent implements OnInit {
  profileForm: FormGroup;
  prefs;

  permissions = ['Account Management', 'Customer'];

  constructor(
    private fb: FormBuilder,
    private preferencesService: PreferencesService,
    private profileService: ProfileService,
    private busyService: BusyService,
    private accountService: AccountService,
    private toastService: ToastrService
  ) {
    this.prefs = preferencesService.getPreferences();
  }

  removePhoto() {
    this.profileForm.get('photoUrl').setValue('');
  }

  updatePhoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profileForm.get('photoUrl').setValue(e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['Admin', Validators.required],
      permissions: [[], Validators.required],
      password: ['', Validators.required],
      photoUrl: [''],
      username: [''],
    });
  }

  onSubmit(): void {
    this.busyService.busy();

    let registerUserDto: RegisterUserDto = {
      email: this.profileForm.controls['email'].value,
      username: this.profileForm.controls['username'].value,
      role: this.profileForm.controls['role'].value,
      permissions: this.profileForm.controls['permissions'].value,
      password: this.profileForm.controls['password'].value,
      requireEmailVerification: false,
    };

    this.accountService.registerUser(registerUserDto).subscribe((response) => {
      let createProfileDto: CreateUserProfileDto = {
        userId: response.id,
        firstName: this.profileForm.controls['firstName'].value,
        lastName: this.profileForm.controls['lastName'].value,
        photoUrl: this.profileForm.controls['photoUrl'].value,
      };

      this.profileService.createProfile(createProfileDto).subscribe(
        (data) => {
          this.toastService.success('Profile created successfully');
          this.profileForm.reset({
            firstName: '',
            lastName: '',
            email: '',
            role: 'Admin',
            permissions: [],
            accountEnabled: true,
            photoUrl: '',
            username: '',
            userToEdit: null,
          });
          this.busyService.idle();
        },
        (error) => {
          this.toastService.error('Profile update failed');
          this.busyService.idle();
        }
      );
    });
  }
}
