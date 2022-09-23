using webApiV2.Data;
using webApiV2.Interfaces;
using webApiV2.Models;

namespace webApiV2.Services
{
    public class UrlService : IUrlService
    {
        private readonly ApplicationDbContext _context;
        public UrlService(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Url> GetAll()
        {
            return _context.Urls;
        }

        public Url Get(string id)
        {
            return _context.Urls.FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Url> GetByUserId(string userId)
        {
            return _context.Urls.Where(x => x.UserId == userId);
        }

        public Url GetByShortUrl(string shortUrl)
        {
            return _context.Urls.FirstOrDefault(x => x.ShortUrl == shortUrl);
        }

        public string Create(string fullUrl, string shortUrl, string userId)
        {
            var newUrl = new Url() { FullUrl = fullUrl, ShortUrl = shortUrl, UserId = userId };
            _context.Urls.Add(newUrl);
            _context.SaveChanges();

            var url = _context.Urls.Find(newUrl.Id);
            if (url != null)
                return $"Url FullUrl:{fullUrl} was successfully created";
            return "Creating failed";
        }

        public string UpdateClicks(string id, int clicks)
        {
            var url = _context.Urls.FirstOrDefault(x => x.Id == id);
            url.Clicks = clicks;
            _context.Urls.Update(url);
            _context.SaveChanges();
            return "Click update successfully";
        }

        public string Delete(string id)
        {
            var deleteUrl = _context.Urls.FirstOrDefault(x => x.Id == id);
            if (deleteUrl != null)
                _context.Urls.Remove(deleteUrl);
            _context.SaveChanges();

            var url = _context.Urls.Find(id);
            if (url == null)
                return $"Url Id:{id} was successfully deleted";
            return "Deleting failed";
        }
    }
}
