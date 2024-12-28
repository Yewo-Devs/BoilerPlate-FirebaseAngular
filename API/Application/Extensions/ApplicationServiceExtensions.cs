using API.Application.Interfaces;
using API.Infrastructure.Services;

namespace API.Application.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddScoped<ITicketService, TicketService>();
            services.AddScoped<INotificationService, NotificationService>();
			services.AddScoped<IEmailService, EmailService>();
            services.AddScoped<IReportService, ReportService>();
			services.AddScoped<ITeamService, TeamService>();
            services.AddScoped<ICloudflareService, CloudflareService>();
			services.AddScoped<IPaymentService, PaymentService>();
            services.AddScoped<IPhotoService, PhotoService>();
			services.AddScoped<IFirebaseService, FirebaseService>();
			services.AddScoped<IFirebaseStorageService, FirebaseStorageService>();
            services.AddScoped<IHttpClientService, HttpClientService>();
			services.AddScoped<IChatGptService, ChatGptService>();

			return services;
        }
    }
}
