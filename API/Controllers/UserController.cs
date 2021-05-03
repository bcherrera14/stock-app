using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NHibernate;

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
        public ActionResult GetUsers()
        {
            
            return Ok("Users!");
            
        }
    }
}
