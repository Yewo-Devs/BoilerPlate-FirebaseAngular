import { Component } from '@angular/core';
import { NavBreadCrumbComponent } from '../../ui/nav-bread-crumb/nav-bread-crumb.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ProfileService } from '../../../shared/services/profile-service/profile.service';
import { ToastrService } from 'ngx-toastr';
import { EditProfileDto } from '../../../shared/models/dto/user-auth/edit-profile-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { EditUserDto } from '../../../shared/models/dto/user-auth/edit-user-dto';
import { BusyService } from '../../../shared/services/busy-service/busy.service';

@Component({
  selector: 'app-profile',
  imports: [NavBreadCrumbComponent, ReactiveFormsModule, SharedUiModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  prefs;

  constructor(
    private fb: FormBuilder,
    private preferencesService: PreferencesService,
    private profileService: ProfileService,
    private busyService: BusyService,
    private accountService: AccountService,
    private toastService: ToastrService
  ) {
    this.prefs = this.preferencesService.getPreferences();
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
      photoUrl: [''],
      username: [''],
    });

    this.profileForm.controls['firstName'].setValue(
      this.prefs.profile.firstName
    );
    this.profileForm.controls['lastName'].setValue(this.prefs.profile.lastName);
    this.profileForm.controls['email'].setValue(this.prefs.user.email);
    this.profileForm.controls['photoUrl'].setValue(this.prefs.profile.photoUrl);
    this.profileForm.controls['username'].setValue(this.prefs.user.username);
  }

  onSubmit(): void {
    this.busyService.busy();

    let editProfileDto: EditProfileDto = {
      userId: this.prefs.user.id,
      firstName: this.profileForm.controls['firstName'].value,
      lastName: this.profileForm.controls['lastName'].value,
      photoUrl: this.profileForm.controls['photoUrl'].value,
    };

    let editUserDto: EditUserDto = {
      id: this.prefs.user.id,
      accountEnabled: true,
      email: this.profileForm.controls['email'].value,
      username: this.profileForm.controls['username'].value,
      role: this.prefs.user.role,
      permissions: this.prefs.user.permissions,
    };

    this.accountService.editUser(editUserDto).subscribe((response) => {
      this.prefs.user = response;

      this.preferencesService.setPreferences(this.prefs);

      this.accountService.setUser(response);
    });

    this.profileService.editProfile(editProfileDto).subscribe(
      (data) => {
        this.toastService.success('Profile updated successfully');
        this.busyService.idle();

        this.profileService
          .getProfile(this.prefs.user.id)
          .subscribe((_response) => {
            this.prefs.profile = _response;
            this.preferencesService.setPreferences(this.prefs);
          });
      },
      (error) => {
        this.toastService.error('Profile update failed');
        this.busyService.idle();
      }
    );
  }
}
