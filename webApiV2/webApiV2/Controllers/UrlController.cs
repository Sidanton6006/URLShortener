using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using webApiV2.Interfaces;

namespace webApiV2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UrlController : ControllerBase
    {
        private readonly IUrlService _urlService;

        public UrlController(IUrlService urlService)
        {
            _urlService = urlService;
        }

        [HttpGet]
        [Route("GetAll")]
        public string GetAll()
        {
            return JsonConvert.SerializeObject(Ok(_urlService.GetAll()));
        }

        [HttpGet]
        [Route("GetById")]
        [Authorize]
        public string Get(string id)
        {
            var url = _urlService.Get(id);

            if (url != null)
                return JsonConvert.SerializeObject(Ok(url));

            return JsonConvert.SerializeObject(BadRequest("Nothing found"));
        }

        [HttpGet]
        [Route("GetByUserId")]
        [Authorize]
        public string GetByUserId(string userId)
        {
            return JsonConvert.SerializeObject(Ok(_urlService.GetByUserId(userId)));
        }

        [HttpGet]
        [Route("GetByShortUrl")]
        public string GetByShortUrl(string shortUrl)
        {
            return JsonConvert.SerializeObject(Ok(_urlService.GetByShortUrl(shortUrl)));
        }

        [HttpPost]
        [Route("Create")]
        [Authorize]
        public string Create(string fullUrl, string shortUrl, string userId)
        {
            return JsonConvert.SerializeObject(Ok(_urlService.Create(fullUrl, shortUrl, userId)));
        }

        [HttpPost]
        [Route("Delete")]
        public string Delete(string id)
        {
            return JsonConvert.SerializeObject(Ok(_urlService.Delete(id)));
        }

        [HttpPost]
        [Route("UpdateClicks")]
        public string UpdateClicks(string id, int clicks)
        {
            return JsonConvert.SerializeObject(Ok(_urlService.UpdateClicks(id, clicks)));
        }
    }
}
