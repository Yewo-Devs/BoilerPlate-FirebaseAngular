import { Component, OnInit } from '@angular/core';
import { TicketDto } from '../../../shared/models/dto/ticket/ticket-dto';
import { TicketService } from '../../../shared/services/ticket-service/ticket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ticket',
  imports: [CommonModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent implements OnInit {
  constructor(private ticketService: TicketService) {}

  tickets: TicketDto[] = [];

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((response: TicketDto[]) => {
      this.tickets = response.sort((a, b) => {
        const priorityOrder = ['High', 'Medium', 'Low'];
        return (
          priorityOrder.indexOf(a.priority) - priorityOrder.indexOf(b.priority)
        );
      });
    });
  }

  onResolve(ticket: TicketDto) {
    ticket.archived = true;

    this.ticketService.archiveTicket(ticket.id).subscribe((response) => {
      window.location.reload();
    });
  }
}
