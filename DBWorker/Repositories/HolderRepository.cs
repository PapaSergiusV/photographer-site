using DBWorker.Classes;
using DBWorker.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBWorker.Repositories
{
    class HolderRepository : IRepository<Holder>
    {
        private Context db;
        public HolderRepository(Context context)
        {
            db = context;
        }

        public void Create(Holder entity)
        {
            db.Holders.Add(entity);
        }

        public void Delete(int id)
        {
            Holder holder = Read(id);
            if (holder != null)
                db.Holders.Remove(holder);
        }

        public Holder Read(int id) => db.Holders.Find(id);

        public IEnumerable<Holder> ReadAll()
        {
            return db.Holders;
        }

        public void Update(Holder entity)
        {
            db.Holders.Update(entity);
        }
    }
}
