using System;
using System.Collections.Generic;
using System.Text;

namespace DBWorker.Interfaces
{
    interface IRepository<T> where T : class
    {
        void Create(T entity);
        IEnumerable<T> ReadAll();
        T Read(int id);
        void Update(T entity);
        void Delete(int id);
    }
}
