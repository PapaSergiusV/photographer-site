using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using DBWorker.Classes;

namespace DBWorker
{
    class Context : DbContext
    {
        public DbSet<Holder> Holders { get; set; }
        public DbSet<Picture> Pictures { get; set; }
        public DbSet<Service> Services { get; set; }
        public DbSet<AboutText> AboutTexts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=PhWebsite;Trusted_Connection=True;");
        }
    }
}
