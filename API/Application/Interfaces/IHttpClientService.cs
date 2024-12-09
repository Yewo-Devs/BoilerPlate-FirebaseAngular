namespace API.Application.Interfaces
{
    /// <summary>
    /// This is our implementation of the HttpClient.
    /// It enables us to make web requests.
    /// </summary>
    public interface IHttpClientService
    {
        /// <summary>
        /// This method posts a http request of url encoded form data
        /// </summary>
        /// <param name="url"></param>
        /// <param name="content"></param>
        /// <returns>HttpResponseMessage</returns>
        public Task<HttpResponseMessage> PostFormUrlEnconded(string url, StringContent content);
        /// <summary>
        /// This method sends a request with the given request message.
        /// </summary>
        /// <param name="request"></param>
        /// <returns>HttpResponseMessage</returns>
        public Task<HttpResponseMessage> Request(HttpRequestMessage request);
    }
}
