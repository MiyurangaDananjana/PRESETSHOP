using System.ComponentModel.DataAnnotations;
using System.Net.NetworkInformation;

namespace ProjectX.API.Data.Models;

public class OrderItem
{
    [Key]
    public int Id { get; set; }
    public int? OrderId { get; set; }
    public int? ProductId { get; set; }
    public decimal? Quantity { get; set; }
    public decimal? UnitPrice { get; set; }
    public decimal? TotalPrice { get; set; }

    //Navigation
    public Order? Order {get; set;}
    public Product? Product {get; set;}
}