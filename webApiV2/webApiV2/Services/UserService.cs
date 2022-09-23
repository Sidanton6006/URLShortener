using webApiV2.Data;
using webApiV2.Interfaces;
using webApiV2.Models;

namespace webApiV2.Services
{
    public class UserService:IUserService
    {
        private readonly ApplicationDbContext _context;
        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAll()
        {
            return _context.Users;
        }

        public User Get(string id)
        {
            return _context.Users.FirstOrDefault(x => x.Id == id);
        }

        public User Get(string username, string password)
        {
            var PasswordHash = Sha256.getHash(password);
            return _context.Users.FirstOrDefault(u => u.UserName == username && u.HashedPassword == PasswordHash);
        }

        public string Create(string username, string password)
        {
            string NewHashedPassword = Sha256.getHash(password);
            var newUser = new User() { UserName = username, HashedPassword = NewHashedPassword };
            _context.Users.Add(newUser);
            _context.SaveChanges();

            var user = _context.Users.Find(newUser.Id);
            if (user != null)
                return $"User UserName:{username} was successfully created";
            return "Creating failed";
        }

        public string Delete(string id)
        {
            var deleteUser = _context.Users.FirstOrDefault(x => x.Id == id);
            if (deleteUser != null)
                _context.Users.Remove(deleteUser);
            _context.SaveChanges();

            var user = _context.Users.Find(id);
            if (user == null)
                return $"User Id:{id} was successfully deleted";
            return "Deleting failed";
        }
    }
}
