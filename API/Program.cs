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
#if DEBUG
					webBuilder.UseStartup<Startup>();
#else
                    webBuilder.UseStartup<Startup>().UseUrls("http://*:5000");
#endif
				});
    }
}