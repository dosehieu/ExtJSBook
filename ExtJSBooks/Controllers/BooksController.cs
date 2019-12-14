using ExtJSBooks.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ExtJSBooks.Controllers
{
    public class BooksController : Controller
    {
        BookDBContext db = new BookDBContext();
        // GET: Books
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Home()
        {
            return View();
        }
        [HttpGet]
        public string GetBook()
        {
            List<Book> _list = new List<Book>();
           

            _list = db.Books.ToList();
            return JsonConvert.SerializeObject(_list);
        }
        [HttpPost]
        public string DeleteBook(int id)
        {
            Book book = db.Books.SingleOrDefault(n => n.id == id);
            if(book !=null)
            {
                db.Books.Remove(book);
                db.SaveChanges();
                return "Remove Book Success";
            }
            else
                return "Remove Book Fail";
        }
        [HttpPost]
        public string AddBook([Bind(Include = "title,author,price,qty")] Book book)
        {
            if (ModelState.IsValid)
            {
                db.Books.Add(book);
                db.SaveChanges();
                return "Success";

            }
            return "Fail";
               
        }
        [HttpPost]
        public string EditBook([Bind(Include = "title,author,price,qty")] Book book, int id)
        {
            
            if (ModelState.IsValid)
            {
                book.id = id;
                db.Entry(book).State = EntityState.Modified;
                db.SaveChanges();
                return "Success";
            }
             return "Fail";
        }
    }
}