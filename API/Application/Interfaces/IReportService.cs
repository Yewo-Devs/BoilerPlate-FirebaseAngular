using API.Application.DTO;
using System.Collections;

namespace API.Application.Interfaces
{
	public interface IReportService
	{
		Task<DashboardDto> GetDashboard();
		Task<Hashtable[]> GetSalesReport(PeriodDto periodDto);
	}
}
