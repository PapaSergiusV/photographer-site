using System;
using System.Collections.Generic;
using System.Text;
using DBWorker.Classes;
using DBWorker.Interfaces;

namespace DBWorker.Repositories
{
    class AboutTextRepository : IRepository<AboutText>
    {
        private Context db;
        public AboutTextRepository(Context context)
        {
            db = context;
        }
        public void Create(AboutText entity)
        {
            db.AboutTexts.Add(entity);
        }

        public void Delete(int id)
        {
            AboutText aboutText = Read(id);
            if (aboutText != null)
                db.AboutTexts.Remove(aboutText);
        }

        public AboutText Read(int id) => db.AboutTexts.Find(id);

        public IEnumerable<AboutText> ReadAll()
        {
            return db.AboutTexts;
        }

        public void Update(AboutText entity)
        {
            db.AboutTexts.Update(entity);
        }
    }
}
