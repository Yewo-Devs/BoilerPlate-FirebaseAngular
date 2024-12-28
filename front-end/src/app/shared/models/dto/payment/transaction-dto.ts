export interface TransactionDto {
  id: string;
  customerId: string;
  itemTitle: string;
  amount: number;
  currency: string;
  status: string;
  dateTime: Date;
  location: string;
}
