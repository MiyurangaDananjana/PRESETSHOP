using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ProjectX.API.Data.Enums;

namespace ProjectX.API.Data.Models;

public class Order
{
    [Key]
    public int Id { get; set; }
    public int? UserId { get; set; }
    public string? OrderNumber { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal TotalAmount { get; set; }
    public OrderEnum Status { get; set; }
    public PaymentMethodEnum PaymentMethod { get; set; }
    public string? ShippingAddress { get; set; }
    public DateTime? OrderDate { get; set; }
    public User? User {get; set;}
    public ICollection<OrderItem> OrderItems {get; set;}

}