using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NHibernate;
using API.Models;

namespace API.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private ISessionFactory _sessionFactory;
        public UserController(ISessionFactory factory)
        {
            _sessionFactory = factory;
        }

        //Get All Users
        [HttpGet("api/users")]
        public ActionResult<IEnumerable<User>> GetUsers()
        {
            // return Ok("Users!");
            using (var session = _sessionFactory.OpenSession())
            {
                var query = session.Query<User>();
                return query.ToList();
            }
            
        }

        //Get User by ID
        [HttpGet("api/user/id")]
        public ActionResult GetUser()
        {
            using (var session = _sessionFactory.OpenSession()) {
                using (var tx = session.BeginTransaction()) { 
                    var students = session.CreateCriteria<User>().List<User>(); 
                    
                    foreach (var student in students) { 
                        Console.WriteLine("{0} \t{1} \t{2}", student.id, 
                            student.firstname, student.lastname); 
                    }
                    
                    var stdnt = session.Get<User>("1c74b96a066e48aa820da3d66ecc9d1a"); 
                    Console.WriteLine("Retrieved by ID"); 
                    Console.WriteLine("{0} \t{1} \t{2}", stdnt.id, 
                        stdnt.firstname, stdnt.lastname); 
                    tx.Commit();
                } 
            }
            return Ok("Found User");
        }

        //Create User
        [HttpPost("api/users")]
        public  ActionResult PostUser(string firstname, string lastname, string username, string password)
        {
            using (var session = _sessionFactory.OpenSession())
            {
                using (var transaction = session.BeginTransaction())
                {
                    var newUser = new User();
                    newUser.firstname = firstname;
                    newUser.lastname = lastname;
                    newUser.username = username;
                    newUser.password = password;
                    newUser.accountbalance = 100000;
                    session.Save(newUser);
                    transaction.Commit();
                }
            }
            return Ok(string.Format("Created New User {0} {1}", firstname, lastname));
        }
    }
}
