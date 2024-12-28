using API.Application.DTO;
using API.Application.Interfaces;
using API.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Infrastructure.Controllers
{
	public class TicketController : BaseApiController
	{
		private readonly ITicketService _ticketService;

		public TicketController(ITicketService ticketService)
        {
			_ticketService = ticketService;
		}

		[HttpGet("get")]
		public async Task<ActionResult<IEnumerable<Ticket>>> GetTickets()
		{
			return (await _ticketService.GetTickets()).ToArray();
		}

		[HttpGet("get-count")]
		public async Task<ActionResult<int>> GetTicketCount()
		{
			return await _ticketService.GetTicketCount();
		}

		[HttpPost("send")]
		public async Task CreateTicket(CreateTicketDto createTicketDto)
		{
			await _ticketService.CreateTicket(createTicketDto);
		}

		[HttpGet("archive")]
		public async Task ArchiveTicket([FromQuery] string Id)
		{
			await _ticketService.ArchiveTicket(Id);
		}
	}
}
