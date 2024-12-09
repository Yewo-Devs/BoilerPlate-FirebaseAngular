export interface CheckoutDto {
  customerId: string;
  itemTitle: string;
  itemDescription: string;
  currency: string;
  price: number;
  pricePerUser: number;
  numberOfUsers: number;
  paymentType: PaymentTypes;
  /**
   * Subscription interval.(day, week, month, year)
   */
  subscriptionInterval: string;
  freeTrial: boolean;
  freeTrialPeriodDays: number;
}

export enum PaymentTypes {
  Subscription,
  SubscriptionPerUser,
  OnceOff,
  PayperUse,
}
