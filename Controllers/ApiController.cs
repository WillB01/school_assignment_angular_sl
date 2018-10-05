using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Lernia.LocalData;

namespace Lernia.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        const string SEARCH_KEY = "866595ff-a5c6-481b-8aca-4a055fb19824";
        const string REALTIME_KEY = "d90842cf-a47f-4d3d-a7c0-8a9243ff1ea4";


        [Route("search/{term}")]
        public async Task Search([FromRoute] string term)
        {
            await Query($"https://api.resrobot.se/v2/location.name?key={SEARCH_KEY}&input={term}&format=json");
        }

         [Route("realtime/{siteId}")]
        public async Task Realtime([FromRoute] int siteId)
        {
            await Query($"https://api.resrobot.se/v2/departureBoard?key={REALTIME_KEY}&id={siteId}&maxJourneys=10&format=json");

            // await Query($"http://api.sl.se/api2/realtimedeparturesv4.json?key={REALTIME_KEY}&siteid={siteId}&timewindow={timeWindow}");
        }

        [Route("searchlocal")]
        public string SearchLocal()
        {
            return Data.SearchResponse();
        }


        [Route("departureslocal")]
        public string DeparturesLocal()
        {
            return Data.DeparturesResponse();
        }


        [Route("stopslocal")]
        public string StopsLocal()
        {
            return Data.StopsResponse();
        }

         [Route("searchbackup")]
        public string SearchBackup()
        {
            return Data.SearchBackupResponse();
        }

        private async Task Query(string url)
        {
            using (var request = new HttpClient())
            {
                var stream = await request.GetStreamAsync(url);
                Response.ContentType = "application/json";
                await stream.CopyToAsync(Response.Body);
            }
        }
    }
}