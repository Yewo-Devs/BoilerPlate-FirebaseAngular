import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private httpClient: HttpClient) {}

  getTicketCount() {
    return this.httpClient.get(environment.apiUrl + 'ticket/get-count');
  }

  getTickets() {
    return this.httpClient.get(environment.apiUrl + 'ticket/get');
  }

  createTicket(sendTicketDto: any) {
    return this.httpClient.post(
      environment.apiUrl + 'ticket/send',
      sendTicketDto
    );
  }

  archiveTicket(ticketId: string) {
    return this.httpClient.get(
      environment.apiUrl + 'ticket/archive?Id=' + ticketId
    );
  }
}
