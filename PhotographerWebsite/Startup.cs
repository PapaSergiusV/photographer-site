using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;

namespace PhotographerWebsite
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(); // включаем поддержку webpack
            }

            /*app.Use(async (context, next) => 
            {
                Console.WriteLine("\n\n-------------\n\n");

                Console.WriteLine(context.Request.HttpContext);
                Console.WriteLine(context.Request.Method);
                Console.WriteLine(context.Request.Path);
                Console.WriteLine(context.Request.Query);
                Console.WriteLine(context.Request.Body);

                Console.WriteLine("\n\n-------------\n\n");
                await next.Invoke();
            });*/

            app.UseStaticFiles();
            app.UseMvc(routes => routes.MapRoute(name: "default", template: "{controller=HomePage}/{action=Index}"));

            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("404 Error");
            });
        }
    }
}
