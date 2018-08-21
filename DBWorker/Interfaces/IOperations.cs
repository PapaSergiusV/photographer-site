using DBWorker.Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DBWorker.Interfaces
{
    interface IOperations : IDisposable
    {
        IRepository<Holder> Holders { get; }
        IRepository<Picture> Pictures { get; }
        IRepository<Service> Services { get; }
        IRepository<AboutText> AboutTexts { get; }
        void Save();
    }
}
