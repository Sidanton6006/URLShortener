using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using webApiV2.Interfaces;

namespace webApiV2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }   
        
        [HttpGet]
        [Route("GetAll")]
        public string GetAll()
        {
            return JsonConvert.SerializeObject(Ok(_userService.GetAll()));
        }

        [HttpGet]
        [Route("GetById")]
        [Authorize]
        public string Get(string id)
        {
            var user = _userService.Get(id);

            if(user != null)
                return JsonConvert.SerializeObject(Ok(user));

            return JsonConvert.SerializeObject(BadRequest("Nothing found"));
        }

        [HttpGet]
        [Route("GetByCredentials")]
        public string Get(string username, string password)
        {
            var user = _userService.Get(username, password);

            if (user != null)
                return JsonConvert.SerializeObject(Ok(user));

            return JsonConvert.SerializeObject(BadRequest("Nothing found"));
        }

        [HttpPost]
        [Route("Create")]
        public string Create(string username, string password)
        {
            return JsonConvert.SerializeObject(Ok(_userService.Create(username, password)));            
        }
        [HttpPost]
        [Route("Delete")]
        public string Delete(string id)
        {
            return JsonConvert.SerializeObject(Ok(_userService.Delete(id)));
        }
    }
}
