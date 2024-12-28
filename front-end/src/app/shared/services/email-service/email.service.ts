import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private httpClient: HttpClient) {}

  SendCustomerContactForm(customerContactForm: any) {
    return this.httpClient.post(
      environment.apiUrl + 'email/send-customer-contact-form',
      customerContactForm
    );
  }

  SendSuggestion(suggestionDto: any) {
    return this.httpClient.post(
      environment.apiUrl + 'email/send-suggestion',
      suggestionDto
    );
  }
}
