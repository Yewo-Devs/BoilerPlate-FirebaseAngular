export interface ProfileDto {
  userId: string;
  username: string;
  firstname: string;
  lastname: string;
  photoUrl: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  address?: string;
}
