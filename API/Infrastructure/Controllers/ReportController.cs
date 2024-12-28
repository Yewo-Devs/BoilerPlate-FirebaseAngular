using API.Application.DTO;
using API.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections;

namespace API.Infrastructure.Controllers
{
	public class ReportController : BaseApiController
	{
		private readonly IReportService _reportService;

		public ReportController(IReportService reportService)
		{
			_reportService = reportService;
		}

		[Authorize("AdminPolicy")]
		[HttpGet("dashboard")]
		public async Task<ActionResult<DashboardDto>> GetDashboard()
		{
			return await _reportService.GetDashboard();
		}

		[Authorize("AdminPolicy")]
		[HttpPost("get-sales-report")]
		public async Task<ActionResult<Hashtable[]>> GetSalesReport(PeriodDto periodDto)
		{
			return await _reportService.GetSalesReport(periodDto);
		}
	}
}
