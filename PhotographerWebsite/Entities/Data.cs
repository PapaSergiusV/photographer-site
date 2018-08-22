using System;
using System.Collections.Generic;
using System.Text;

namespace PhotographerWebsite.Entities
{
    public class DataPW
    {
        public HolderPW Holder { get; set; }
        public IEnumerable<PicturePW> Pictures { get; set; }
        public IEnumerable<ServicePW> Price { get; set; }
        public AboutTextPW Text { get; set; }
    }
}
