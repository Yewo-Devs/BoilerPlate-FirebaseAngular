namespace API.Application.Interfaces
{
	public interface ICloudflareService
	{
		Task<string> GetZoneId(string domain);
		Task CreateDnsRecord(string domain, string type, string name, string content);
		Task SetPageRules(string domain, string subdomain);
	}
}
