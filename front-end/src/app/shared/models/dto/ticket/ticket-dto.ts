export interface TicketDto {
  id: string;
  title: string;
  description: string;
  archived: boolean;
  createdDate: Date;
  modifiedDate: Date;
  createdBy: string;
  priority: string;
}
