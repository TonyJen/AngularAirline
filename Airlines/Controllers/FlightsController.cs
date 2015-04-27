

using Airlines.Model;
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
                new Flight() {Id = 1, Airline = "Delta", Approved = false, Cities = new []{"ORD", "SFO"}},
                new Flight() {Id = 1, Airline = "JetBlue", Approved = false, Cities = new []{"ORD", "SFO"}}
            };

            return Ok(model);
        }
        
    }
}