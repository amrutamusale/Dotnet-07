using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TwitAppApi.ViewModels;

namespace TwitAppApi.Interfaces
{
    public interface IJWTManagerRepository
    {
        Tokens Authenicate(LoginViewModel users, bool IsRegister);
        object Authenicate(RegisterViewModel register, bool v);
    }
}