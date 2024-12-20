export interface NotificationDto {
  id: string;
  ownerId: string;
  title: string;
  message: string;
  actionUrl: string;
  dateTime: Date;
  archived: boolean;
}
