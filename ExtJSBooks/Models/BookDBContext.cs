
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ExtJSBooks.Models
{
    public class BookDBContext : DbContext
    {
        public BookDBContext() : base("name=ConnectionString")
        {
           
        }

        public DbSet<Book> Books { get; set; }
    }
}