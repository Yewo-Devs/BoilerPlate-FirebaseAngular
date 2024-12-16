import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SharedUiModule } from '../../../shared/ui/shared-ui.module';
import { ProfileService } from '../../../shared/services/profile-service/profile.service';
import { Router } from '@angular/router';
import { CreateUserProfileDto } from '../../../shared/models/dto/user-auth/create-user-profile-dto';
import { PreferencesService } from '../../../shared/services/preferences-service/preferences.service';

@Component({
  selector: 'app-profile-onboarding',
  imports: [ReactiveFormsModule, SharedUiModule],
  templateUrl: './profile-onboarding.component.html',
  styleUrl: './profile-onboarding.component.css',
})
export class ProfileOnboardingComponent {
  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService,
    private preferencesService: PreferencesService,
    private router: Router
  ) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
    });
  }

  profileSubmit() {
    const fullName = this.profileForm.get('fullName')?.value || '';
    const [firstName, lastName] = fullName.split(' ');

    let createProfileDto: CreateUserProfileDto = {
      userId: this.preferencesService.getPreferences().user.id,
      firstName: firstName,
      lastName: lastName,
    };

    this.profileService
      .createProfile(createProfileDto)
      .subscribe((response) => {
        this.profileService
          .getProfile(createProfileDto.userId)
          .subscribe((profile) => {
            if (!this.preferencesService.getPreferences().nextPage) {
              this.router.navigateByUrl('/dashboard');
            } else {
              this.router.navigateByUrl(
                this.preferencesService.getPreferences().nextPage
              );

              let prefs = this.preferencesService.getPreferences();
              prefs.nextPage = '';
              this.preferencesService.setPreferences(prefs);
            }
          });
      });
  }
}
