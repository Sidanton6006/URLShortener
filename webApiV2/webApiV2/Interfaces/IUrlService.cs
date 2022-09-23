using webApiV2.Models;

namespace webApiV2.Interfaces
{
    public interface IUrlService
    {
        IEnumerable<Url> GetAll();
        Url Get(string id);
        IEnumerable<Url> GetByUserId(string userId);
        Url GetByShortUrl(string shortUrl);
        string Create(string fullUrl, string shortUrl, string userId);
        string UpdateClicks(string id, int clicks);
        string Delete(string id);
    }
}
