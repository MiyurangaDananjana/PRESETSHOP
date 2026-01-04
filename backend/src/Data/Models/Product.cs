using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectX.API.Data.Models;


public class Product
{
    [Key]
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Description { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal? Price { get; set; }
    public string? ImageUrl { get; set; }
    public Enums.ProductEnum IsActive { get; set; }
    public DateTime? CreateAt { get; set; }


    public ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
}