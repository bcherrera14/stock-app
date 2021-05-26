using System.Collections.Generic;

namespace API
{
        public class StockResponse
    {
        public string companyName { get; set; }
        public string symbol { get; set; }
        public string latestPrice { get; set; }
    }



    public class StockList
    {
        public string Stocks { get; set; }
    }
}