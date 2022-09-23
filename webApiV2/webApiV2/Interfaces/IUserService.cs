using webApiV2.Models;

namespace webApiV2.Interfaces
{
    public interface IUserService
    {
        IEnumerable<User> GetAll();
        User Get(string id);
        User Get(string username, string password);
        string Create(string username, string password);
        string Delete(string id);
    }
}
