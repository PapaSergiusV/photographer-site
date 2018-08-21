using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PhotographerWebsite.Models;

namespace PhotographerWebsite.Controllers
{
    public class HomePageController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public string EmailHandler(Email email)
        {
            return $"Name: {email.Name};\nPhone: {email.Phone};\nText: {email.Text}";
        }
    }
}