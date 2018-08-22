using DBWorker.Classes;
using DBWorker.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBWorker.Repositories
{
    class PictureRepository : IRepository<Picture>
    {
        private Context db;
        public PictureRepository(Context context)
        {
            db = context;
        }
        public void Create(Picture entity)
        {
            db.Pictures.Add(entity);
        }

        public void Delete(int id)
        {
            Picture picture = Read(id);
            if(picture != null)
                db.Pictures.Remove(picture);
        }

        public Picture Read(int id) => db.Pictures.Find(id);

        public IEnumerable<Picture> ReadAll()
        {
            return db.Pictures;
        }

        public void Update(Picture entity)
        {
            db.Pictures.Update(entity);
        }
    }
}
