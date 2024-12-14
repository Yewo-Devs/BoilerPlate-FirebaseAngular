export interface ProfileDto {
  userId: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  address?: string;
}
