using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc;
using API.Application.Interfaces;
using Microsoft.AspNetCore.Authorization;
using API.Core.Models.Purchases;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.Extensions.Caching.Memory;

namespace API.Application.Attributes
{
	public class SubscriptionAuthorize : AuthorizeAttribute, IAsyncAuthorizationFilter
	{
		private readonly IMemoryCache _cache;

		public SubscriptionAuthorize(IMemoryCache cache)
		{
			_cache = cache;
		}

		public async Task OnAuthorizationAsync(AuthorizationFilterContext context)
		{
			var _firebaseService = context.HttpContext.RequestServices.GetRequiredService<IFirebaseService>();

			var authorizationHeader = context.HttpContext.Request.Headers["Authorization"].FirstOrDefault();
			if (authorizationHeader == null || !authorizationHeader.StartsWith("Bearer "))
			{
				context.Result = new UnauthorizedResult();
				return;
			}

			var bearerToken = authorizationHeader.Substring("Bearer ".Length).Trim();

			var handler = new JwtSecurityTokenHandler();
			var jsonToken = handler.ReadToken(bearerToken) as JwtSecurityToken;
			var userId = jsonToken?.Claims.FirstOrDefault(claim => claim.Type == "sub")?.Value;

			if (string.IsNullOrEmpty(userId))
			{
				context.Result = new UnauthorizedResult();
				return;
			}

			if (!_cache.TryGetValue(userId, out Subscription subscription))
			{
				subscription = await _firebaseService
					.GetInstanceOfType<Subscription>(Core.Models.Enums.FirebaseDataNodes.Subscription, userId);

				if (subscription != null)
				{
					var cacheEntryOptions = new MemoryCacheEntryOptions()
						.SetSlidingExpiration(TimeSpan.FromMinutes(30));

					_cache.Set(userId, subscription, cacheEntryOptions);
				}
			}

			if (subscription == null)
			{
				context.Result = new BadRequestObjectResult("You do not have an active subscription");
				return;
			}

			if (subscription.ExpiryDate < DateTime.UtcNow)
			{
				context.Result = new BadRequestObjectResult("Your subscription is expired!");
				return;
			}
		}
	}
}
