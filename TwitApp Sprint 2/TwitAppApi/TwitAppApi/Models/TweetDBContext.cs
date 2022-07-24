using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace TwitAppApi.Models
{
    public partial class TweetDBContext : DbContext
    {
        public TweetDBContext()
        {
        }

        public TweetDBContext(DbContextOptions<TweetDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblLogin> TblLogins { get; set; }
        public virtual DbSet<TblTweet> TblTweets { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Data Source=Amruta;Initial Catalog=TweetDB;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TblLogin>(entity =>
            {
                entity.ToTable("TblLogin");

                entity.Property(e => e.ConfirmPassword).HasMaxLength(100);

                entity.Property(e => e.ContactNumber).HasColumnType("numeric(10, 0)");

                entity.Property(e => e.Email).HasMaxLength(100);

                entity.Property(e => e.FirstName).HasMaxLength(100);

                entity.Property(e => e.LastName).HasMaxLength(100);

                entity.Property(e => e.LoginId).HasMaxLength(100);

                entity.Property(e => e.Password).HasMaxLength(100);
            });

            modelBuilder.Entity<TblTweet>(entity =>
            {
                entity.ToTable("TblTweet");

                entity.Property(e => e.AuthorEmail).HasMaxLength(100);

                entity.Property(e => e.AuthorLogo).HasMaxLength(100);

                entity.Property(e => e.AuthorSlug).HasMaxLength(100);

                entity.Property(e => e.TweetDescription).HasMaxLength(1000);

                entity.Property(e => e.TweetImage).HasMaxLength(100);

                entity.Property(e => e.TweetTime).HasMaxLength(100);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
