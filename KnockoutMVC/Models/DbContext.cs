using System.Data.Entity;

namespace KnockoutMVC.Models
{
    public partial class DbContext : System.Data.Entity.DbContext
    {
        public DbContext()
            : base("name=DbContext")
        {
        }

        public virtual DbSet<MTB_Articles> MTB_Articles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}