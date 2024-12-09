export interface EditUserDto {
  id: string;
  username?: string;
  accountEnabled: boolean;
  email: string;
  role?: string;
  permissions?: string[];
}
