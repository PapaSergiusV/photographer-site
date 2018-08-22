using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PhotographerWebsite.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using PhotographerWebsite.Entities;
using AutoMapper;
using DBWorker;

namespace PhotographerWebsite.Controllers
{
    public class HomePageController : Controller
    {
        private readonly IHostingEnvironment _env;

        public HomePageController(IHostingEnvironment env)
        {
            _env = env;
        }

        public IActionResult Index()
        {
            return View();
        }

        public FileResult EmailHandler(Email email)
        {
            string name = DateTime.Now.Millisecond + ".txt";
            string path = _env.ContentRootPath + "/" + name;
            using (var sw = new StreamWriter(new FileStream(path, FileMode.OpenOrCreate)))
            {
                sw.WriteLine($"Name: {email.Name}");
                sw.WriteLine($"Phone: {email.Phone}");
                sw.WriteLine($"Text: {email.Text}");
                sw.WriteLine(DateTime.Now);
            }
            return File(new FileStream(path, FileMode.Open), "Application/txt", name);
        }

        public FileResult GetData(string str)
        {
            return File("~/data.json", "Application/txt");
        }

        //public IEnumerable<PicturePW> Test()
        //{
        //    //PicturePW[] x; 
        //    Mapper.Initialize(cfg => cfg.CreateMap<DBWorker.Classes.Picture, PicturePW>());
        //    var x = Mapper.Map<IEnumerable<PicturePW>>(DBWorker.CommLayer.CommLayer.GetPictures());
        //    return x;
        //}

        public DataPW Test()
        {
            //PicturePW[] x; 
            Mapper.Initialize(cfg => cfg.CreateMap<DBWorker.CommLayer.Data, DataPW>());
            var x = Mapper.Map<DataPW>(DBWorker.CommLayer.CommLayer.GetData());
            return x;
        }
    }
}