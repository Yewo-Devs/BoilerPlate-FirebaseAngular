import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CheckoutDto } from '../../models/dto/payment/checkout-dto';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpClient: HttpClient) {}

  //get-subscription
  getSubscription(userId: string) {
    return this.httpClient.get(
      environment.apiUrl + 'payment/get-subscription?userId=' + userId
    );
  }

  //get-transaction
  getTransactions(userId: string, page: number, size: number) {
    return this.httpClient.get(
      `${environment.apiUrl}payment/get-user-transactions?userId=${userId}&currentPage=${page}&pageSize=${size}`
    );
  }

  //update-payment-method
  updatePaymentMethod(subscriptionId: string) {
    return this.httpClient.get(
      environment.apiUrl +
        'payment/update-payment-method?subscriptionId=' +
        subscriptionId,
      {
        responseType: 'text' as const,
      }
    );
  }

  //cancel-subscription
  cancelSubscription(subscriptionId: string) {
    return this.httpClient.get(
      environment.apiUrl +
        'payment/cancel-subscription?subscriptionId=' +
        subscriptionId
    );
  }

  getPaymentPage(checkoutDto: CheckoutDto) {
    return this.httpClient
      .post(environment.apiUrl + 'payment/get-payment-page', checkoutDto, {
        responseType: 'text' as const,
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
}
