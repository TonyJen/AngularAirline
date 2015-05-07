

using Airlines.Model;
using System;
using System.Collections.Generic;
using System.Web.Http;
namespace Airlines.Controllers
{
    public class FlightsController: ApiController
    {
        
        public IHttpActionResult GetAllFlights()
        {
            var model = new List<Flight>
            {
                new Flight() {Id = 1, Airline = "Delta", Approved = false, Cities = new []{"ORD", "SFO"}, Date = DateTime.Now, StartTime= DateTime.Now, TotalDuration = 8, Price = 300},
                new Flight() {Id = 1, Airline = "JetBlue", Approved = false, Cities = new []{"ORD", "SFO"}, Date = DateTime.Now, StartTime= DateTime.Now, TotalDuration = 8, Price = 500}
            };

            return Ok(model);
        }
        
    }
}