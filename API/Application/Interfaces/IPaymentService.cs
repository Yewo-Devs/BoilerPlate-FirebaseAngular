using API.Application.DTO;
using Stripe;

namespace API.Application.Interfaces
{
    public interface IPaymentService
    {
		Task UpdateSubscription(UpdateSubscriptionDto updateSubscriptionDto);
		Task CancelSubscription(string subscriptionId);
		Task<string> GetPaymentPage(CheckoutDto checkoutDto);
		Task HandleInvoicePaymentFailed(Invoice? invoice);
		Task HandleInvoicePaymentSucceeded(Invoice? invoice);
		Task<string> HandleResult(string[] queryParams);
		Task<string> UpdatePaymentMethod(string subscriptionId);
	}
}
