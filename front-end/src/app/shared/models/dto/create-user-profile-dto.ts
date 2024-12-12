export interface CreateUserProfileDto {
  userId: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  dateOfBirth?: Date;
  phoneNumber?: PhoneNumber;
  address?: string;
}

export interface PhoneNumber {
  countryCode: string;
  areaCode: string;
  number: string;
}

export class PhoneNumberUtil {
  static getNumber(phoneNumber: PhoneNumber): string {
    if (phoneNumber.areaCode) {
      return `+${phoneNumber.countryCode}-${phoneNumber.areaCode}-${phoneNumber.number}`;
    }
    return `+${phoneNumber.countryCode}-${phoneNumber.number}`;
  }
}
