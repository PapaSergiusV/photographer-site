using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PhotographerWebsite.Controllers;
using PhotographerWebsite.Entities;
using AutoMapper;

namespace PhotographerWebsite.AutoMapping
{
    public class AutoMapper
    {
        static AutoMapper()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<DBWorker.CommLayer.Data, DataPW>());
        }

        static public DataPW GetData()
        {
            return Mapper.Map<DataPW>(DBWorker.CommLayer.CommLayer.GetData());
        }
    }
}
