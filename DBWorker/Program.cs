using System;
using System.Collections;
using System.Collections.Generic;
using DBWorker.Classes;

namespace DBWorker
{
    class Program
    {
        static void Main(string[] args)
        {
            Operations db = new Operations();
            Holder kolya = new Holder()
            {
                FirstName = "Nikolaj",
                LastName = "Palienko",
                LinkVk = "https://vk.com/id499574180",
                LinkInstagram = "instagram.com",
                Email = "-",
                Phone = "246783",
                Address = "Surgut city"
            };
            db.Holders.Create(kolya);
            db.Save();
            
            Console.WriteLine(db.Holders.Read(1).LinkVk);
        }
    }
}
