namespace API.Models
{
    public class User
    {
        public virtual int id { get; set; }
        public virtual string firstName { get; set; }
        public virtual string lastName { get; set; }
        public virtual string username { get; set; }
        public virtual string password { get; set; }
    }
}