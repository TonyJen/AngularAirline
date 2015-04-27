using Airlines.AppStart;
using System;
using System.Web.Http;
using System.Web.Management;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Http;


namespace Airlines
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
        }

       
    }
}