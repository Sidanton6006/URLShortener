namespace webApiV2.Models
{
    public class User
    {
        public User()
        {
            this.Urls = new HashSet<Url>();
        }
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string UserName { get; set; }
        public string HashedPassword { get; set; }

        public ICollection<Url> Urls { get; set; }
    }
}
