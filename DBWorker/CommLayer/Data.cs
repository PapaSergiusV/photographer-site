using System;
using System.Collections.Generic;
using System.Text;
using DBWorker.Classes;

namespace DBWorker.CommLayer
{
    public class Data
    {
        public Holder Holder { get; set; }
        public IEnumerable<Picture> Pictures { get; set; }
        public IEnumerable<Service> Price { get; set; }
        public AboutText Text { get; set; }
    }
}
