using API.Application.DTO;
using API.Application.Interfaces;
using API.Core.Models;
using IdentityX.Application.Extensions;
using static API.Core.Models.Enums;

namespace API.Infrastructure.Services
{
	public class TicketService : ITicketService
	{
		private readonly IFirebaseService _firebaseService;
		private readonly IEmailService _emailService;
		private readonly string _saasOwnerEmail = Environment.GetEnvironmentVariable("SaaS_Owner_Email");
		public TicketService(IFirebaseService firebaseService, IEmailService emailService)
        {
			_firebaseService = firebaseService;
			_emailService = emailService;
		}

        public async Task ArchiveTicket(string Id)
		{
			var ticket = await _firebaseService
				.GetInstanceOfType<Ticket>(FirebaseDataNodes.Ticket, Id);

			ticket.Archived = true;
			ticket.ModifiedDate = DateTime.UtcNow;

			await _firebaseService.UpdateData(FirebaseDataNodes.Ticket, Id, ticket);

			//Inform Client
			await _emailService.SendEmail(
				$"Your ticket with ID #{ticket.ID} has been successfully resolved.",
				"Ticket Resolved", 
				new List<string> { ticket.CreatedBy });
		}

		public async Task<int> GetTicketCount()
		{
			var tickets = await GetTickets();

			tickets = tickets.Where(n => !n.Archived);

			return tickets.Count();
		}

		public async Task<IEnumerable<Ticket>> GetTickets()
		{
			var result = await _firebaseService
				.GetCollectionOfType<Ticket>(FirebaseDataNodes.Ticket);

			return result;
		}

		public async Task CreateTicket(CreateTicketDto createTicketDto)
		{
			Ticket ticket = createTicketDto.Map<Ticket>();

			ticket.CreatedDate = DateTime.UtcNow;
			ticket.Archived = false;
			ticket.ID = DateTime.UtcNow.Ticks.ToString();

			await _firebaseService.StoreData(FirebaseDataNodes.Ticket, ticket, ticket.ID);

			await _emailService.SendEmail(
				"A new ticket has been created",
				"Ticket Created",
				new List<string>() { _saasOwnerEmail });

			//Inform Client
			await _emailService.SendEmail(
			$"Your ticket with ID #{ticket.ID} has been successfully created. We are currently working on resolving it.",
			"Ticket Created",
			new List<string> { ticket.CreatedBy });
		}
	}
}
