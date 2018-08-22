using System;
using System.Collections.Generic;
using System.Text;
using DBWorker.Classes;

namespace DBWorker.CommLayer
{
    public static class CommLayer
    {
        static private Operations db;
        static public Data GetData()
        {
            db = new Operations();
            return new Data()
            {
                Holder = db.Holders.Read(1),
                Pictures = db.Pictures.ReadAll(),
                Price = db.Services.ReadAll(),
                Text = db.AboutTexts.Read(1)
            };
        }

        public static Picture GetPicture()
        {
            db = new Operations();
            return db.Pictures.Read(1);
        }
    }
}
