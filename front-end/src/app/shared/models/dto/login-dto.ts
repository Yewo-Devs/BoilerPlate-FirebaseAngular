export interface LoginDto {
  email?: string;
  username?: string;
  password: string;
  keepLoggedIn: boolean;
}
