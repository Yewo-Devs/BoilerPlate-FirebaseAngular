export interface UserDto {
  id: string;
  email: string;
  username: string;
  role: string;
  permissions: string[];
  token: string;
  refreshToken: string;
  accountEnabled: boolean;
}
