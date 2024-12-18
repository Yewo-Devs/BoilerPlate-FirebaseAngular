using API.Application.DTO;
using API.Core.Models.Purchases;
using Stripe;
using Subscription = API.Core.Models.Purchases.Subscription;

namespace API.Application.Interfaces
{
    public interface IPaymentService
    {
		Task<Subscription> GetSubscription(string userId);
		Task<IEnumerable<Transaction>> GetUserTransactions(string userId, int pageSize, int currentPage);
		Task UpdateSubscription(UpdateSubscriptionDto updateSubscriptionDto);
		Task CancelSubscription(string subscriptionId);
		Task<string> GetPaymentPage(CheckoutDto checkoutDto);
		Task HandleInvoicePaymentFailed(Invoice? invoice);
		Task HandleInvoicePaymentSucceeded(Invoice? invoice);
		Task<string> HandleResult(string[] queryParams);
		Task<string> UpdatePaymentMethod(string subscriptionId);
	}
}
