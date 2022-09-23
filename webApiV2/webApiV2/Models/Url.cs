namespace webApiV2.Models
{
    public class Url
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string FullUrl { get; set; }
        public string ShortUrl { get; set; }
        public string CreatedAt { get; set; } = DateTime.Now.ToString();
        public int Clicks { get; set; } = 0;

        public string UserId { get; set; }
        public User User { get; set; }
    }
}
