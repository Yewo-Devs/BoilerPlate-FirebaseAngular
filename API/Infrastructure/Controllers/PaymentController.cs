using API.Application.DTO;
using API.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Stripe;

namespace API.Infrastructure.Controllers
{
	public class PaymentController : BaseApiController
	{
		private readonly IPaymentService _paymentService;

		public PaymentController(IPaymentService paymentService)
		{
			_paymentService = paymentService;
		}

		[Authorize]
		[HttpGet("update-payment-method")]
		public async Task<ActionResult<string>> UpdatePaymentMethod([FromQuery] string subscriptionId)
		{
			return await _paymentService.UpdatePaymentMethod(subscriptionId);
		}

		[HttpPost("webhook")]
		public async Task<IActionResult> HandleStripeWebhook()
		{
			var json = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();
			try
			{
				var stripeEvent = EventUtility.ParseEvent(json);

				// Handle the event
				if (stripeEvent.Type == "invoice.payment_succeeded")
				{
					var invoice = stripeEvent.Data.Object as Invoice;
					await _paymentService.HandleInvoicePaymentSucceeded(invoice);
				}

				else if (stripeEvent.Type == "invoice.payment_failed")
				{
					var invoice = stripeEvent.Data.Object as Invoice;
					await _paymentService.HandleInvoicePaymentFailed(invoice);
				}

				return Ok();
			}
			catch (StripeException e)
			{
				return BadRequest(e);
			}
		}

		[HttpPost("get-payment-page")]
		public async Task<ActionResult<string>> GetPaymentPage(CheckoutDto checkoutDto)
		{
			return await _paymentService.GetPaymentPage(checkoutDto);
		}

		[HttpGet("payment-result")]
		public async Task<ActionResult> HandleResult([FromQuery] string session_id,
			[FromQuery] string accountId)
		{
			return new RedirectResult(await _paymentService
				.HandleResult(new string[2] { session_id, accountId }));
		}

		[Authorize]
		[HttpGet("get-subscription")]
		public async Task<ActionResult<Core.Models.Purchases.Subscription>> GetSubscription([FromQuery] string userId)
		{
			return await _paymentService.GetSubscription(userId);
		}

		[Authorize]
		[HttpGet("get-user-transactions")]
		public async Task<IEnumerable<Core.Models.Purchases.Transaction>> GetUserTransactions([FromQuery] string userId, [FromQuery] int pageSize, [FromQuery] int currentPage)
		{
			return await _paymentService.GetUserTransactions(userId, pageSize, currentPage);
		}

		[Authorize]
		[HttpPost("update-subscription")]
		public async Task UpdateSubscription(UpdateSubscriptionDto updateSubscriptionDto)
		{
			await _paymentService.UpdateSubscription(updateSubscriptionDto);
		}
		
		[Authorize]
		[HttpGet("cancel-subscription")]
		public void CancelSubscription([FromQuery] string subscriptionId)
		{
			_paymentService.CancelSubscription(subscriptionId);
		}
	}
}
