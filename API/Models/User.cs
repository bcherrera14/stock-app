namespace API.Models
{
    public class User
    {
        public virtual string id { get; set; }
        public virtual string firstname { get; set; }
        public virtual string lastname { get; set; }
        public virtual string username { get; set; }
        public virtual string password { get; set; }
        public virtual int accountbalance { get; set; }
    }
}