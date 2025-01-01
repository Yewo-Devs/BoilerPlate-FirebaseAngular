using API.Application.Extensions;
using API.Infrastructure.Services;
using CompressedStaticFiles;
using IdentityX.Application.Extensions;

namespace API
{
	public class Startup
	{
		private readonly IConfiguration _config;

		public Startup(IConfiguration config)
		{
			_config = config;
		}

		public void ConfigureServices(IServiceCollection services)
		{
			services.AddIdentityXAuthentication(_config);
			services.AddIdentityXRoleBasedAuthorization();
			services.AddIdentityXUserManagement<EmailService, DataService>();
			services.AddIdentityXMultiFactorAuthentication();

			services.AddApplicationServices(_config);

			services.AddControllers();
			services.AddCors();
			services.AddCompressedStaticFiles();
		}

		public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
		{
			if (env.IsDevelopment() || env.IsStaging())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseRouting();
			app.UseHsts();
			app.UseHttpsRedirection();
			app.UseCors(x => x.AllowAnyMethod()
				.AllowAnyHeader()
				.SetIsOriginAllowed(origin => true)
				.AllowCredentials());
			app.UseAuthentication();
			app.UseAuthorization();

			app.UseEndpoints(endpoints =>
			{
				endpoints.MapControllers();
			});
		}
	}
}