using System;
using System.Collections.Generic;
using System.Text;
using DBWorker.Classes;
using DBWorker.Interfaces;
using DBWorker.Repositories;

namespace DBWorker
{
    class Operations : IOperations
    {
        private Context db;
        private HolderRepository holderRepository;
        private PictureRepository pictureRepository;
        private ServiceRepository serviceRepository;
        private AboutTextRepository aboutTextRepository;

        public Operations()
        {
            db = new Context();
        }

        public IRepository<Holder> Holders
        {
            get
            {
                if (holderRepository == null)
                    holderRepository = new HolderRepository(db);
                return holderRepository;
            }
        }

        public IRepository<Picture> Pictures
        {
            get
            {
                if (pictureRepository == null)
                    pictureRepository = new PictureRepository(db);
                return pictureRepository;
            }
        }

        public IRepository<Service> Services
        {
            get
            {
                if (serviceRepository == null)
                    serviceRepository = new ServiceRepository(db);
                return serviceRepository;
            }
        }

        public IRepository<AboutText> AboutTexts
        {
            get
            {
                if (aboutTextRepository == null)
                    aboutTextRepository = new AboutTextRepository(db);
                return aboutTextRepository;
            }
        }

        public void Dispose()
        {
            db.Dispose();
        }

        public void Save()
        {
            db.SaveChanges();
        }
    }
}
