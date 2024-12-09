﻿using API.Application.DTO;
using API.Core.Models.Purchases;
using IdentityX.Core.Entities;

namespace API.Application.Interfaces
{
    public interface IEmailService: IdentityX.Application.Interfaces.IEmailService
	{
		Task SendCustomerContactFormMessage(CustomerContactFormMessageDto customerContactFormMessageDto);
		Task SendReceipt(CheckoutDto checkoutDto, AppUser appUser);
		Task SendEmail(string message, string subject, List<string> receipients);
		Task PaymentFailedNotice(Subscription subscription, AppUser appUser);
	}
}
