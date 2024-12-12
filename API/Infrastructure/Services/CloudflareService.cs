using System.Net.Http.Headers;
using System.Text;
using API.Application.Interfaces;
using Newtonsoft.Json;

namespace API.Infrastructure.Services
{
    public class CloudflareService: ICloudflareService
	{
        private readonly HttpClient _httpClient;

        public CloudflareService()
        {
            _httpClient = new HttpClient();
            var cloudflareApiToken = Environment.GetEnvironmentVariable("Cloudflare_ApiToken");

            if (string.IsNullOrEmpty(cloudflareApiToken))
            {
                throw new InvalidOperationException("Cloudflare API token is not configured.");
            }

            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", cloudflareApiToken);
        }

        public async Task<string> GetZoneId(string domain)
        {
            var response = await _httpClient.GetAsync($"https://api.cloudflare.com/client/v4/zones?name={domain}");

            if (!response.IsSuccessStatusCode)
            {
                var responseBody = await response.Content.ReadAsStringAsync();
                throw new InvalidOperationException($"Failed to get zone ID: {responseBody}");
            }

            var _responseBody = await response.Content.ReadAsStringAsync();
            var zoneResponse = JsonConvert.DeserializeObject<ZoneResponse>(_responseBody);

            return zoneResponse.Result.First().Id;
        }

        public async Task CreateDnsRecord(string domain, string type, string name, string content)
        {
            var zoneId = await GetZoneId(domain);

            var dnsRecord = new
            {
                type,
                name,
                content,
                ttl = 3600
            };

            var response = await _httpClient.PostAsync(
                $"https://api.cloudflare.com/client/v4/zones/{zoneId}/dns_records",
                new StringContent(JsonConvert.SerializeObject(dnsRecord), Encoding.UTF8, "application/json")
            );

            if (!response.IsSuccessStatusCode)
            {
                var responseBody = await response.Content.ReadAsStringAsync();
                throw new InvalidOperationException($"Failed to create DNS record: {responseBody}");
            }
        }

		public async Task SetPageRules(string domain, string subdomain)
		{ 
			var zoneId = await GetZoneId(domain);
			var pageRule = new
			{
				targets = new[]
				{
					new
					{
						target = "url",
						constraint = new
						{
                            @operator = "matches",
							value = $"https://{domain}/*"
						}
					}
				},
				actions = new[]
				{
					new
					{
						id = "forwarding_url",
						value = new
						{
							url = $"https://{subdomain}.{domain}/$1",
							status_code = 301
						}
					}
				},
				priority = 1,
				status = "active"
			};

			var response = await _httpClient.PostAsync(
				$"https://api.cloudflare.com/client/v4/zones/{zoneId}/pagerules",
				new StringContent(JsonConvert.SerializeObject(pageRule), Encoding.UTF8, "application/json")
			);

			if (!response.IsSuccessStatusCode)
			{
				var responseBody = await response.Content.ReadAsStringAsync();
				throw new InvalidOperationException($"Failed to set page rule: {responseBody}");
			}
		}

		private class ZoneResponse
        {
            public List<Zone> Result { get; set; }
        }

        private class Zone
        {
            public string Id { get; set; }
        }
    }
}
