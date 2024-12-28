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

			await _firebaseService.UpdateData(FirebaseDataNodes.Notification, Id, ticket);

			//Inform Client
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

			await _firebaseService.StoreData(FirebaseDataNodes.Ticket, ticket, null, true);

			await _emailService.SendEmail("Ticket Created", 
				"A new ticket has been created", new List<string>() { _saasOwnerEmail });

			//Inform Client
		}
	}
}
