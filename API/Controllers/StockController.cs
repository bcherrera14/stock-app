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
using NHibernate;
using NHibernate.Linq;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    public class StockController : ControllerBase
    {
        static readonly HttpClient client = new HttpClient();

        private ISessionFactory _sessionFactory;
        public StockController(ISessionFactory factory)
        {
            _sessionFactory = factory;
        }

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

        [HttpGet("api/stocks/id")]
        public ActionResult<IEnumerable<StockData>> GetStockList(string user)
            {
                using (var session = _sessionFactory.OpenSession()) {
                    var stockList = session.Query<StockData>()
                        .Where(stock => stock.user_id == user); 
                    return stockList.ToList();
                }
            }

        //Create Stock Holding
        [HttpPost("api/stocks")]
        public  ActionResult PostStocks(string user_id, string companyname, int totalshares, string purchaseprice)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    var newStock = new StockData();
                    newStock.user_id = user_id;
                    newStock.companyname = companyname;
                    newStock.totalshares = totalshares;
                    newStock.purchaseprice = purchaseprice;
                    session.Save(newStock);
                    transaction.Commit();
                }
            }
            return Ok(string.Format("Created New Stock {0} QTY: {1}", companyname, totalshares));
        }
    }

}

                