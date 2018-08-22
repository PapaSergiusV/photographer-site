using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Text.RegularExpressions;
using DBWorker.Classes;
using DBWorker.CommLayer;

namespace DBWorker
{
    class Program
    {
        static void Main(string[] args)
        {
            //Operations db = new Operations();

            //var arr = File.ReadAllLines("data.json").Where(x => Regex.IsMatch(x, @"about")).Select(x => Regex.Match(x, @"[\w\s]{10,}")).ToArray();
            //var price = File.ReadAllLines("data.json").Where(x => Regex.IsMatch(x, @"price")).Select(x => Regex.Match(x, @"\d+")).ToArray();
            //for (int i = 0; i < arr.Length; i++)
            //{
            //    Console.WriteLine($"{i + 1} {arr[i].Value}\t{price[i].Value}");
            //    db.Services.Create(new Service() { About = arr[i].Value, Price = price[i].Value});
            //}

            //db.AboutTexts.Create(new AboutText() {
            //    Title = "Photographer, designer and ...",
            //    Text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugiat incidunt minus doloremque deserunt tempora atque, odio corrupti dolor dolore deleniti odit labore officiis aperiam quasi. Fuga accusantium, rerum exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui iste reprehenderit beatae in quasi sapiente, ipsam mollitia modi omnis labore placeat cupiditate quod, vel velit accusantium consectetur neque."
            //});

            //db.Save();

            //Data data = CommLayer.CommLayer.GetData();
            //Console.WriteLine(data.Holder.Address);
            //foreach (var x in data.Pictures)
            //    Console.WriteLine(x.Id + "\t" + x.Path);

            //var x = CommLayer.CommLayer.GetPicture();
        }
    }
}
