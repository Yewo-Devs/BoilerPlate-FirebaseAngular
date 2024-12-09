using API.Application.Interfaces;
using System.Net;

namespace API.Infrastructure.Services
{
    public class HttpClientService : IHttpClientService
    {
        private readonly HttpClient httpClient;
        public HttpClientService()
        {
            //Get our HttpClients
            httpClient = GetClient();
        }
        #region Create Client
        private HttpClient GetClient()
        {
            return new HttpClient();
        }
        #endregion
        public async Task<HttpResponseMessage> Request(HttpRequestMessage request)
        {
            return await httpClient.SendAsync(request);
        }

        public async Task<HttpResponseMessage> PostFormUrlEnconded(string url, StringContent content)
        {
            return await httpClient.PostAsync(url, content);
        }
    }
}
