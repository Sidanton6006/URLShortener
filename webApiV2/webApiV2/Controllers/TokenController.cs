using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using webApiV2.Interfaces;
using webApiV2.Models;
using webApiV2.Services;

namespace webApiV2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TokenController : ControllerBase
    {
        public IConfiguration _configuration;
        public IUserService _userService;

        public TokenController(IConfiguration configuration, IUserService userService)
        {
            _configuration = configuration;
            _userService = userService;
        }

        [HttpGet]
        [Route("Get")]
        public string Get(string username, string password)
        {
            var PasswordHash = Sha256.getHash(password);
            var UserData = new User { UserName = username, HashedPassword = PasswordHash };
            if (UserData != null && UserData.UserName != null && UserData.HashedPassword != null)
            {
                var user = _userService.Get(username, password);
                if (user != null)
                {
                    var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
                    var tokenDescriptor = new SecurityTokenDescriptor
                    {
                        Subject = new ClaimsIdentity(new[]
                        {
                            new Claim("Id", Guid.NewGuid().ToString()),
                            new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
                            new Claim("UserId", user.Id),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
                        }),
                        Expires = DateTime.UtcNow.AddDays(7),
                        SigningCredentials = new SigningCredentials
                        (new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha512Signature)
                    };
                    var tokenHandler = new JwtSecurityTokenHandler();
                    var token = tokenHandler.CreateToken(tokenDescriptor);
                    var jwtToken = tokenHandler.WriteToken(token);

                    return JsonConvert.SerializeObject(Ok(jwtToken));
                }
                else
                {
                    return JsonConvert.SerializeObject(BadRequest("Invalid credentials"));
                }
            }
            else
            {
                return JsonConvert.SerializeObject(BadRequest());
            }
        }        
    }
}
