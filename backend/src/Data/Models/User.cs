using System.ComponentModel.DataAnnotations;
using System.Net.Sockets;

namespace ProjectX.API.Data.Models;

public class User
{
    [Key]
    public int Id { get; set; }
    public required string Email { get; set; }
    public required string PasswordHash { get; set; }
    public required string FullName { get; set; }
    public required string PhoneNumber { get; set; }
    public required string Address { get; set; }
    public required string City { get; set; }
    public required string Country { get; set; }
    public required string PostalCode { get; set; }
    public DateTime? CreateAt { get; set; }

    //Navigation
    public ICollection<Order> Orders { get; set; }
}