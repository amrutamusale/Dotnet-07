using System;
using System.Collections.Generic;

#nullable disable

namespace TwitAppApi.Models
{
    public partial class TblLogin
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string LoginId { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public int? ContactNumber { get; set; }
    }
}
