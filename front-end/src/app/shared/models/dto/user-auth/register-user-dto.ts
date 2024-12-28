export interface RegisterUserDto {
  username?: string;
  password: string;
  email: string;
  role?: string;
  permissions?: string[];
  requireEmailVerification: boolean;
}
