using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace TFL.Controllers
{
    [Route("api/[controller]")]

    public class TubeController : Controller
    {
        [HttpGet, Route("GetTubeStatus")]

        public async Task<IActionResult> GetTubeStatus()
        {
            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri("https://api.tfl.gov.uk");
                    var response = await client.GetAsync("/Line/Mode/tube/Status");
                    response.EnsureSuccessStatusCode();

                    var stringResult = await response.Content.ReadAsStringAsync();

                    var rawData = JsonConvert.DeserializeObject<List<RootObject>>(stringResult);
                  

                    return Ok(new
                    {
                       
                        LineId = rawData[0].name,
                        StatusSeverityDescription = rawData[0].lineStatuses[0].statusSeverityDescription,
                        LineId2 = rawData[1].name,
                        StatusSeverityDescription2 = rawData[1].lineStatuses[0].statusSeverityDescription,
                        LineId3 = rawData[2].name,
                        StatusSeverityDescription3 = rawData[2].lineStatuses[0].statusSeverityDescription,
                        LineId4= rawData[3].name,
                        StatusSeverityDescription4 = rawData[3].lineStatuses[0].statusSeverityDescription,
                        LineId5 = rawData[4].name,
                        StatusSeverityDescription5 = rawData[4].lineStatuses[0].statusSeverityDescription,
                        LineId6 = rawData[5].name,
                        StatusSeverityDescription6 = rawData[5].lineStatuses[0].statusSeverityDescription,
                        LineId7 = rawData[6].name,
                        StatusSeverityDescription7 = rawData[6].lineStatuses[0].statusSeverityDescription,
                        LineId8 = rawData[7].name,
                        StatusSeverityDescription8 = rawData[7].lineStatuses[0].statusSeverityDescription,
                        LineId9 = rawData[8].name,
                        StatusSeverityDescription9  = rawData[8].lineStatuses[0].statusSeverityDescription,
                        LineId10 = rawData[9].name,
                        StatusSeverityDescription10 = rawData[9].lineStatuses[0].statusSeverityDescription,
                        LineId11 = rawData[10].name,
                        StatusSeverityDescription11 = rawData[10].lineStatuses[0].statusSeverityDescription,

                    }); 

                }
                catch (HttpRequestException httpRequestException)
                {
                    return BadRequest("Error getting data");
                }
            }
        }

      

    }


    public class RootObject
    {
        [JsonProperty("name")]
        public string name { get; set; }
        public List<LineStatus> lineStatuses { get; set; }

    }

    public class LineStatus
    {
        public string statusSeverityDescription { get; set; }

    }

}