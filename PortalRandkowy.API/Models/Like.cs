namespace PortalRandkowy.API.Models
{
    public class Like
    {
        public int UserLikesId { get; set; }     // lubi
        public int UserIsLikedId { get; set; }   // lubiany

        public User UserLikes { get; set; }
        public User UserIsLiked { get; set; }
    }
}