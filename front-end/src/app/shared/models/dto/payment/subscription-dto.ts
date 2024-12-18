export interface SubscriptionDto {
  id: string;
  subscriptionId: string;
  customerId: string;
  /**
   * User Ids of all users covered under this subscription
   */
  memberIds: string[];
  itemTitle: string;
  itemDescription: string;
  interval: string;
  currency: string;
  price: number;
  dateTime: Date;
  expiryDate: Date;
  cancellationDate: Date;
}
