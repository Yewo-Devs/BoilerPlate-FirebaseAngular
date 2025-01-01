using Microsoft.AspNetCore.Mvc;

namespace API.Infrastructure.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseApiController : Controller
    {
        public BaseApiController()
        {

        }
    }

}
