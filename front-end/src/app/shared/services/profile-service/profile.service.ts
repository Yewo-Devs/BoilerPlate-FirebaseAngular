import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PreferencesService } from '../preferences-service/preferences.service';
import { ProfileDto } from '../../models/dto/user-auth/profile-dto';
import { CreateUserProfileDto } from '../../models/dto/user-auth/create-user-profile-dto';
import { EditProfileDto } from '../../models/dto/user-auth/edit-profile-dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profileSubject: BehaviorSubject<ProfileDto | null>;
  public profile$: Observable<ProfileDto | null>;

  constructor(
    private httpClient: HttpClient,
    private preferencesService: PreferencesService
  ) {
    const initialprofile = preferencesService.getPreferences().profile;
    this.profileSubject = new BehaviorSubject<ProfileDto | null>(
      initialprofile
    );
    this.profile$ = this.profileSubject.asObservable();
  }

  profile(): ProfileDto | null {
    return this.profileSubject.value;
  }

  public setprofile(profile: ProfileDto | null): void {
    this.profileSubject.next(profile);
    let prefs = this.preferencesService.getPreferences();
    prefs.profile = profile;
    this.preferencesService.setPreferences(prefs);
  }

  getProfile(userId: string) {
    return this.httpClient
      .get(environment.apiUrl + 'profile/get?userId=' + userId)
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  createProfile(createUserProfileDto: CreateUserProfileDto) {
    return this.httpClient.post(
      environment.apiUrl + 'profile/create',
      createUserProfileDto
    );
  }

  editProfile(editProfileDto: EditProfileDto) {
    return this.httpClient.post(
      environment.apiUrl + 'profile/edit',
      editProfileDto
    );
  }

  deleteProfile(userId: string) {
    return this.httpClient.get(
      environment.apiUrl + 'profile/delete?userId=' + userId
    );
  }
}
