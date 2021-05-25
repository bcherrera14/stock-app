namespace API.Models
{
    public class StockData
    {
        public virtual string stock_id { get; set; }
        public virtual string user_id { get; set; }
        public virtual string companyname { get; set; }
        public virtual string symbol { get; set; }

        public virtual int totalshares { get; set; }
        public virtual string purchaseprice { get; set; }
    }

//     public class StockDB
//     {
//         public List<StockData> Statuses { get; set; }
//     }
}