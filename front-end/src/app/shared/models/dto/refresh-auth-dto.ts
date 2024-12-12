export interface RefreshAuthDto {
  accountId: string;
  refreshToken: string;
  keepLoggedIn: boolean;
}
