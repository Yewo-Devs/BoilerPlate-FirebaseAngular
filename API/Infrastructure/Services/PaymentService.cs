using API.Application.Interfaces;
using Stripe.Checkout;
using Stripe;
using static API.Core.Models.Enums;
using SessionService = Stripe.Checkout.SessionService;
using SessionCreateOptions = Stripe.Checkout.SessionCreateOptions;
using API.Application.DTO;
using API.Core.Models.Purchases;
using IdentityX.Application.Interfaces;
using IEmailService = API.Application.Interfaces.IEmailService;
using IdentityX.Application.Extensions;

namespace API.Infrastructure.Services
{
	public class PaymentService : IPaymentService
	{
		private readonly string _applicationDomain;
		private readonly string _stripeApiKey;
		private readonly string _saasName;
		private readonly string _saasOwnerEmail;
		private readonly IFirebaseService _firebaseService;
		private readonly IEmailService _emailService;
		private readonly IAccountService _accountService;

		public PaymentService(IFirebaseService firebaseService, IEmailService emailService, IAccountService accountService, IConfiguration configuration)
		{
			_applicationDomain = configuration["Application_Domain"];
			_stripeApiKey = configuration["Stripe_ApiKey"];
			_saasName = configuration["SaaS_Name"];
			_saasOwnerEmail = configuration["SaaS_Owner_Email"];

			StripeConfiguration.ApiKey = _stripeApiKey;

			_firebaseService = firebaseService;
			_emailService = emailService;
			_accountService = accountService;

			InitializeAsync();
		}

		public async void InitializeAsync()
		{
			await InitWebHook();
		}

		public async Task<string> GetPaymentPage(CheckoutDto checkoutDto)
		{
			var sessionService = new SessionService();

			var sessionLineItemOptions = new SessionLineItemOptions
			{
				PriceData = new SessionLineItemPriceDataOptions
				{
					Currency = checkoutDto.Currency,
					UnitAmountDecimal = checkoutDto.PaymentType == PaymentTypes.SubscriptionPerUser?
					(checkoutDto.Price * 100) + ((checkoutDto.PricePerUser * (decimal)checkoutDto.NumberOfUsers) * 100):
					checkoutDto.Price * 100,
					ProductData = new SessionLineItemPriceDataProductDataOptions
					{
						Name = checkoutDto.ItemTitle,
						Description = checkoutDto.ItemDescription + (checkoutDto.PaymentType == PaymentTypes.SubscriptionPerUser? 
						$"({checkoutDto.NumberOfUsers} users)": "")
					},
					Recurring = checkoutDto.PaymentType == PaymentTypes.Subscription ?
					new SessionLineItemPriceDataRecurringOptions
					{
						Interval = checkoutDto.SubscriptionInterval.ToLower(),
					} : null,
					TaxBehavior = "inclusive",
				},
				Quantity = 1,
			};

			string stripeResultUrl = $"{_applicationDomain}/api/payment/payment-result?session_id={{CHECKOUT_SESSION_ID}}&accountId={checkoutDto.CustomerId}";

			await _firebaseService.StoreData(FirebaseDataNodes.Checkout, checkoutDto, checkoutDto.CustomerId);

			var appUser = await _accountService.GetUserFromId(checkoutDto.CustomerId);

			var options = new SessionCreateOptions
			{
				LineItems = new List<SessionLineItemOptions> { sessionLineItemOptions },
				Mode = checkoutDto.PaymentType == PaymentTypes.Subscription || 
				checkoutDto.PaymentType == PaymentTypes.SubscriptionPerUser ? "subscription" : "payment",
				SuccessUrl = stripeResultUrl,
				CancelUrl = stripeResultUrl,
				AutomaticTax = new SessionAutomaticTaxOptions { Enabled = true },
				CustomerEmail = appUser.Email,
				SubscriptionData = (checkoutDto.PaymentType == PaymentTypes.Subscription ||
				checkoutDto.PaymentType == PaymentTypes.SubscriptionPerUser) && checkoutDto.FreeTrial ?
				new SessionSubscriptionDataOptions
				{
					TrialPeriodDays = checkoutDto.FreeTrialPeriodDays
				} : null
			};

			var session = await sessionService.CreateAsync(options);

			return session.Url;
		}

		public async Task<string> HandleResult(string[] queryParams)
		{
			var sessionService = new SessionService();
			var session = await sessionService.GetAsync(queryParams[0]);

			string paymentResult = session.PaymentStatus != "paid" ? "fail" : "success";
			string resultUrl = $"{_applicationDomain}/payment-result?result={paymentResult}";

			if (session.PaymentStatus != "paid")
				return resultUrl;

			string customerId = queryParams[1];
			var checkoutDto = await _firebaseService.GetInstanceOfType<CheckoutDto>(FirebaseDataNodes.Checkout, customerId);

			var price = checkoutDto.PaymentType == PaymentTypes.SubscriptionPerUser ?
					checkoutDto.Price + (checkoutDto.PricePerUser * (decimal)checkoutDto.NumberOfUsers):
					checkoutDto.Price;

			await _emailService.SendEmail($"You just got paid!!! ${checkoutDto.Price:f2}", _saasName, new List<string> { _saasOwnerEmail });

			var transaction = new Transaction
			{
				Amount = price,
				DateTime = DateTime.UtcNow,
				CustomerId = customerId,
				Id = DateTime.UtcNow.ToString(),
				ItemTitle = checkoutDto.ItemTitle,
			};

			await _firebaseService.StoreData(FirebaseDataNodes.Transaction, transaction, transaction.Id);

			var customerPurchase = new CustomerPurchase
			{
				CustomerId = customerId,
				DateTime = DateTime.UtcNow,
				Price = price,
				ItemTitle = checkoutDto.ItemTitle,
				ItemDescription = checkoutDto.ItemDescription,
				PaymentType = checkoutDto.PaymentType,
				Currency = checkoutDto.Currency,
				FreeTrial = checkoutDto.FreeTrial,
				FreeTrialPeriodDays = checkoutDto.FreeTrialPeriodDays,
				Id = Guid.NewGuid().ToString(),
			};

			await _firebaseService.StoreData(FirebaseDataNodes.CustomerPurchase, customerPurchase, $"{customerId}/{customerPurchase.Id}");

			if (checkoutDto.PaymentType == PaymentTypes.Subscription)
			{
				string subscriptionId = session.SubscriptionId;

				var subscription = new Core.Models.Purchases.Subscription
				{
					SubscriptionId = subscriptionId,
					CustomerId = customerId,
					DateTime = DateTime.UtcNow,
					ExpiryDate = session.Subscription.CurrentPeriodEnd,
					Price = price,
					Currency = checkoutDto.Currency,
					ItemTitle = checkoutDto.ItemTitle,
					ItemDescription = checkoutDto.ItemDescription,
					Id = Guid.NewGuid().ToString(),
				};

				await _firebaseService.StoreData(FirebaseDataNodes.Subscription, subscription, customerId);

				return $"{_applicationDomain}/payment-result?result={paymentResult}&subscriptionInit=true";
			}

			if (checkoutDto.PaymentType == PaymentTypes.SubscriptionPerUser)
			{
				string subscriptionId = session.SubscriptionId;

				var subscription = new Core.Models.Purchases.Subscription
				{
					SubscriptionId = subscriptionId,
					CustomerId = customerId,
					DateTime = DateTime.UtcNow,
					ExpiryDate = session.Subscription.CurrentPeriodEnd,
					Price = price,
					Currency = checkoutDto.Currency,
					ItemTitle = checkoutDto.ItemTitle,
					ItemDescription = checkoutDto.ItemDescription,
					Id = Guid.NewGuid().ToString(),
					MemberIds = new string[1] { customerId }
				};

				await _firebaseService.StoreData(FirebaseDataNodes.Subscription, subscription, customerId);

				return $"{_applicationDomain}/payment-result?result={paymentResult}&subscriptionInit=true";
			}

			await _firebaseService.DeleteData(FirebaseDataNodes.Checkout, customerId);

			return resultUrl;
		}

		public async Task UpdateSubscription(UpdateSubscriptionDto updateSubscriptionDto)
		{
			var firebaseSubscription = await _firebaseService
				.GetInstanceOfType<Core.Models.Purchases.Subscription>
				(FirebaseDataNodes.Subscription, updateSubscriptionDto.CustomerId);

			var subscriptionService = new SubscriptionService();
			var subscription = await subscriptionService.GetAsync(firebaseSubscription.SubscriptionId);

			var options = new SubscriptionUpdateOptions
			{
				Items = new List<SubscriptionItemOptions>
				{
					new SubscriptionItemOptions
					{
						Id = subscription.Items.Data[0].Id,
						PriceData = new SubscriptionItemPriceDataOptions
						{
							Currency = subscription.Items.Data[0].Price.Currency,
							UnitAmountDecimal = updateSubscriptionDto.PaymentType == PaymentTypes.SubscriptionPerUser?
							(updateSubscriptionDto.Price * 100) 
							+ ((updateSubscriptionDto.PricePerUser * 
							(decimal)updateSubscriptionDto.NumberOfUsers) * 100):
							updateSubscriptionDto.Price * 100,
							Recurring = new SubscriptionItemPriceDataRecurringOptions
							{
								Interval = updateSubscriptionDto.SubscriptionInterval,
							},
						},
						Quantity = subscription.Items.Data[0].Quantity
					}
				}
			};

			var price = updateSubscriptionDto.PaymentType == PaymentTypes.SubscriptionPerUser ?
					updateSubscriptionDto.Price + (updateSubscriptionDto.PricePerUser * (decimal)updateSubscriptionDto.NumberOfUsers) :
					updateSubscriptionDto.Price;

			var updatedSubscription = await subscriptionService
				.UpdateAsync(firebaseSubscription.SubscriptionId, options);

			// Update the subscription details in Firebase
			firebaseSubscription.Price = price;
			firebaseSubscription.ExpiryDate = updatedSubscription.CurrentPeriodEnd;

			await _firebaseService
				.UpdateData(FirebaseDataNodes.Subscription, firebaseSubscription.CustomerId, firebaseSubscription);
		}

		public async Task CancelSubscription(string subscriptionId)
		{
			var subscriptions = await _firebaseService.GetCollectionOfType<Core.Models.Purchases.Subscription>(FirebaseDataNodes.Subscription);
			var subscription = subscriptions.First(sub => sub.SubscriptionId == subscriptionId);

			subscription.CancellationDate = DateTime.UtcNow;

			await _firebaseService.UpdateData(FirebaseDataNodes.Subscription, subscription.CustomerId, subscription);

			var service = new SubscriptionService();
			await service.CancelAsync(subscriptionId);
		}

		public async Task HandleInvoicePaymentFailed(Invoice? invoice)
		{
			var subscriptions = await _firebaseService.GetCollectionOfType<Core.Models.Purchases.Subscription>(FirebaseDataNodes.Subscription);
			var subscription = subscriptions.First(sub => sub.SubscriptionId == invoice.SubscriptionId);

			var appUser = await _accountService.GetUserFromId(subscription.CustomerId);
			await _emailService.PaymentFailedNotice(subscription, appUser);
		}

		public async Task HandleInvoicePaymentSucceeded(Invoice? invoice)
		{
			var subscriptions = await _firebaseService.GetCollectionOfType<Core.Models.Purchases.Subscription>(FirebaseDataNodes.Subscription);
			var subscription = subscriptions.First(sub => sub.SubscriptionId == invoice.SubscriptionId);

			var service = new SubscriptionService();
			var sub = await service.GetAsync(invoice.SubscriptionId);

			subscription.ExpiryDate = sub.CurrentPeriodEnd;

			await _firebaseService.UpdateData(FirebaseDataNodes.Subscription, subscription.CustomerId, subscription);

			var appUser = await _accountService.GetUserFromId(subscription.CustomerId);
			var checkoutDto = subscription.Map<CheckoutDto>();

			await _emailService.SendReceipt(checkoutDto, appUser);
			await _emailService.SendEmail($"You just got paid!!! ${subscription.Price:f2}", _saasName, new List<string> { _saasOwnerEmail });

			var transaction = new Transaction
			{
				Amount = subscription.Price,
				DateTime = DateTime.UtcNow,
				CustomerId = subscription.CustomerId,
				Id = DateTime.UtcNow.ToString(),
				ItemTitle = subscription.ItemTitle,
			};

			await _firebaseService.StoreData(FirebaseDataNodes.Transaction, transaction, transaction.Id);
		}

		public async Task<string> UpdatePaymentMethod(string subscriptionId)
		{
			var subscriptionService = new SubscriptionService();
			var subscription = await subscriptionService.GetAsync(subscriptionId);
			var customerId = subscription.CustomerId;

			var customer = await _accountService.GetUserFromId(customerId);

			var options = new SetupIntentCreateOptions
			{
				Customer = customerId,
				PaymentMethodTypes = new List<string> { "card" },
			};

			var service = new SetupIntentService();
			var intent = await service.CreateAsync(options);

			var paymentMethodUpdateUrl = $"https://checkout.stripe.com/setup/{intent.ClientSecret}";

			return paymentMethodUpdateUrl;
		}

		private async Task InitWebHook()
		{
			var service = new WebhookEndpointService();
			var existingWebhooks = await service.ListAsync(new WebhookEndpointListOptions());

			string webhookUrl = $"{_applicationDomain}/api/payment/webhook";
			if (existingWebhooks.Data.Any(we => we.Url == webhookUrl))
				return;

			var options = new WebhookEndpointCreateOptions
			{
				Url = webhookUrl,
				EnabledEvents = new List<string>
					{
						"invoice.payment_succeeded",
						"invoice.payment_failed"
					},
				ApiVersion = "2024-04-10"
			};

			try
			{
				await service.CreateAsync(options);
			}
			catch (StripeException)
			{
				// Log the exception or handle it accordingly
			}
		}
	}
}
