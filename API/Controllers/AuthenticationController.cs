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
    public class AuthenticationController : ControllerBase
    {
        private ISessionFactory _sessionFactory;
        public AuthenticationController(ISessionFactory factory)
        {
            _sessionFactory = factory;
        }

        //Login Auth
        [HttpGet("api/login")]
        public ActionResult<User> GetAuth(string username, string password)
        {
            // return Ok("Users!");
            using (var session = _sessionFactory.OpenSession())
            {
                using (var tx = session.BeginTransaction()) {
                    var users = session.CreateCriteria<User>().List<User>();
                    foreach (var user in users) { 
                        if(user.username == username && user.password == password){
                            // return Ok("Logged In!");
                            return user;

                            // Console.WriteLine("LoggedIn");
                        }
                    }
                }
            }
            return NotFound("User Not Found.");
        }
    }
}