using System;
using System.Collections.Generic;
using System.Text;
using DBWorker.Classes;
using DBWorker.Interfaces;

namespace DBWorker.Repositories
{
    class ServiceRepository : IRepository<Service>
    {
        private Context db;

        public ServiceRepository(Context context)
        {
            db = context;
        }
        public void Create(Service entity)
        {
            db.Services.Add(entity);
        }

        public void Delete(int id)
        {
            Service service = Read(id);
            if (service != null)
                db.Services.Remove(service); 
        }

        public Service Read(int id) => db.Services.Find(id);

        public IEnumerable<Service> ReadAll()
        {
            return db.Services;
        }

        public void Update(Service entity)
        {
            db.Services.Update(entity);
        }
    }
}
