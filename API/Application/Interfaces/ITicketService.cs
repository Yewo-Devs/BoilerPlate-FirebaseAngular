using API.Application.DTO;
using API.Core.Models;

namespace API.Application.Interfaces
{
	public interface ITicketService
	{
		Task CreateTicket(CreateTicketDto createTicketDto);
		Task ArchiveTicket(string Id);
		Task<IEnumerable<Ticket>> GetTickets();
		Task<int> GetTicketCount();
	}
}
