using Microsoft.EntityFrameworkCore;
using webApiV2.Models;

namespace webApiV2.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Url> Urls { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
