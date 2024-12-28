import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { AccountService } from '../../../shared/services/account-service/account.service';
import { BusyService } from '../../../shared/services/busy-service/busy.service';
import { ProfileService } from '../../../shared/services/profile-service/profile.service';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { EditUserDto } from '../../../shared/models/dto/user-auth/edit-user-dto';
import { EditProfileDto } from '../../../shared/models/dto/user-auth/edit-profile-dto';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { UserDto } from '../../../shared/models/dto/user-auth/user-dto';

@Component({
  selector: 'app-edit-user',
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    SharedUiModule,
    MultiSelectModule,
    ToggleSwitchModule,
  ],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  profileForm: FormGroup;

  users: UserDto[] = [];

  user;
  profile;

  permissions = ['Account Management', 'Customer'];

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private busyService: BusyService,
    private accountService: AccountService,
    private toastService: ToastrService
  ) {}

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
    this.accountService.getUsers().subscribe((data) => {
      this.users = data;
    });

    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['Admin', Validators.required],
      permissions: [[], Validators.required],
      accountEnabled: [true],
      photoUrl: [''],
      username: [''],
      userToEdit: [],
    });
  }

  fillForm() {
    this.profileForm.controls['firstName'].setValue(this.profile.firstName);
    this.profileForm.controls['lastName'].setValue(this.profile.lastName);
    this.profileForm.controls['email'].setValue(this.user.email);
    this.profileForm.controls['photoUrl'].setValue(this.profile.photoUrl);
    this.profileForm.controls['username'].setValue(this.user.username);
    this.profileForm.controls['role'].setValue(this.user.role);
    this.profileForm.controls['permissions'].setValue(this.user.permissions);
    this.profileForm.controls['accountEnabled'].setValue(
      this.user.accountEnabled
    );
  }

  onUserSelect(event: any) {
    this.busyService.busy();

    this.user = this.profileForm.controls['userToEdit'].value;

    this.profileService.getProfile(this.user.id).subscribe((data) => {
      this.profile = data;
      this.fillForm();

      this.busyService.idle();
    });
  }

  onSubmit(): void {
    this.busyService.busy();

    let editUserDto: EditUserDto = {
      email: this.profileForm.controls['email'].value,
      username: this.profileForm.controls['username'].value,
      role: this.profileForm.controls['role'].value,
      permissions: this.profileForm.controls['permissions'].value,
      id: this.user.id,
      accountEnabled: this.profileForm.controls['accountEnabled'].value,
    };

    this.accountService.editUser(editUserDto).subscribe((response) => {
      let editProfileDto: EditProfileDto = {
        userId: this.user.id,
        firstName: this.profileForm.controls['firstName'].value,
        lastName: this.profileForm.controls['lastName'].value,
        photoUrl: this.profileForm.controls['photoUrl'].value,
      };

      this.profileService.editProfile(editProfileDto).subscribe(
        (data) => {
          this.toastService.success('Profile updated successfully');
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
          window.location.reload();
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
