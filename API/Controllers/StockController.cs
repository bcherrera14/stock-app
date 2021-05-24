using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace API.Controllers
{
    [ApiController]
    public class StockController : ControllerBase
    {
        static readonly HttpClient client = new HttpClient();

        [HttpGet("api/stocks/search")]
        public async Task<StockResponse> GetStock(string stockSymbol)
            {
                HttpResponseMessage response = await client.GetAsync($"https://sandbox.iexapis.com/stable/stock/{stockSymbol}/quote?token=Tpk_d666d25d0bdf4d1b9653dc40e7f6657f");
                string stockString = await response.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<StockResponse>(stockString);
                // var result = stockString.Trim('[').Trim(']');
                // return JsonConvert.DeserializeObject<StockResponse>(result);
                //Console.WriteLine(stockString);
            }
    }
}

                