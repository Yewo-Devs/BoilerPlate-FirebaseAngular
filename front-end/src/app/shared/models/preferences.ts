import { ProfileDto } from './dto/profile-dto';
import { UserDto } from './dto/user-dto';

// preferences.ts
export interface Preferences {
  retries: number;
  nextPage: any;
  user: UserDto;
  profile: ProfileDto;
  keepLoggedIn: boolean;
}
