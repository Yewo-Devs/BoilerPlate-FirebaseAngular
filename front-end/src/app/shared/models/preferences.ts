import { ProfileDto } from './dto/user-auth/profile-dto';
import { UserDto } from './dto/user-auth/user-dto';

// preferences.ts
export interface Preferences {
  retries: number;
  nextPage: any;
  user: UserDto;
  profile: ProfileDto;
  keepLoggedIn: boolean;
}
