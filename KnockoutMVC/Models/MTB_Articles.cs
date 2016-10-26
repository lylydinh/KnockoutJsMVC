using System.ComponentModel.DataAnnotations;

namespace KnockoutMVC.Models
{
    public partial class MTB_Articles
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Title { get; set; }

        [Required]
        [StringLength(100)]
        public string Excerpts { get; set; }

        [Required]
        [StringLength(1000)]
        public string Content { get; set; }
    }
}