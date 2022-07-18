using System;
using System.Collections.Generic;

#nullable disable

namespace TwitAppApi.Models
{
    public partial class TblTweet
    {
        public int Id { get; set; }
        public string AuthorName { get; set; }
        public string AuthorLogo { get; set; }
        public string AuthorSlug { get; set; }
        public string TweetTime { get; set; }
        public string TweetDescription { get; set; }
        public string TweetImage { get; set; }
    }
}
