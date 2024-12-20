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
