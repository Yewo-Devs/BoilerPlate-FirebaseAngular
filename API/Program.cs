using Microsoft.AspNetCore.Server.Kestrel.Core;

namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.ConfigureKestrel(options =>
					{
						options.ListenAnyIP(5000, listenOptions =>
						{
							listenOptions.Protocols = HttpProtocols.Http2;
							listenOptions.UseHttps();
						});
					});
#if DEBUG
					webBuilder.UseStartup<Startup>();
#else
                    webBuilder.UseStartup<Startup>().UseUrls("http://*:5000");
#endif
				});
    }
}