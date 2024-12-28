namespace API.Core.Models
{
    public class Enums
    {
        public enum FirebaseDataNodes
        {
            Account,
			Profile,
			Mfa,
			Checkout,
			Transaction,
			CustomerPurchase,
			Subscription,
			Team,
			Notification,
			Ticket,
		}

		public enum PaymentTypes
		{
			Subscription,
			SubscriptionPerUser,
			OnceOff,
			PayperUse
		}
	}
}
