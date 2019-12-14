﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExtJSBooks.Models
{
    public class Book
    {
        public int id { get; set; }
        public string title { get; set; }
        public string author { get; set; }
        public int price { get; set; }
        public int qty { get; set; }
    }
}