using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwitAppApi.Interfaces;
using TwitAppApi.Models;
using TwitAppApi.ViewModels;
using Microsoft.AspNetCore.Http;

namespace TwitAppApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        TweetDBContext db;
        IJWTManagerRepository iJWTMangerRepository;

        //public object WebSecurity { get; private set; }
        //public object EmailManager { get; private set; }

        public LoginController(TweetDBContext _db, IJWTManagerRepository _iJWTMangerRepository)
        {
            db = _db;
            iJWTMangerRepository = _iJWTMangerRepository;
        }

        [HttpGet]
        [Route("User")]
        public IEnumerable<TblLogin> Get()
        {
            return db.TblLogins;
        }


        [HttpPost]
        [Route("login")]
        public IActionResult Login(LoginViewModel loginViewModel)
        {
            var token = iJWTMangerRepository.Authenicate(loginViewModel, false);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }


        [HttpPost]
        [Route("register")]
        public IActionResult Register(RegisterViewModel registerViewModel)
        {
            LoginViewModel login = new LoginViewModel();
            login.FirstName = registerViewModel.FirstName;
            login.LastName = registerViewModel.LastName;
            login.Email = registerViewModel.Email;
            login.LoginId = registerViewModel.LoginId;
            login.Password = registerViewModel.Password;
            login.ConfirmPassword = registerViewModel.ConfirmPassword;
            login.ContactNumber =  registerViewModel.ContactNumber;
            var token = iJWTMangerRepository.Authenicate(login, true);
            if (token == null)
            {
                return Unauthorized();
            }
            return Ok(token);
        }

        /*[HttpGet("forgot-password")]
          public ActionResult ForgotPassword()
          {
              return View();
          }
         [HttpPost("forgot-password")]
          public ActionResult ForgotPassword(ForgotPasswordModel model)
          {
              return View();
          }
              if (ModelState.IsValid)
              {

              return View();
          }*/
    }
}