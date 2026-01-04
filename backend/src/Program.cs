using Microsoft.EntityFrameworkCore;
using ProjectX.API.Data;

var builder = WebApplication.CreateBuilder(args);

// Configure Database Connection
var connectionString = $"Host={Environment.GetEnvironmentVariable("POSTGRES_HOST") ?? "localhost"};" +
                      $"Port={Environment.GetEnvironmentVariable("POSTGRES_PORT") ?? "5432"};" +
                      $"Database={Environment.GetEnvironmentVariable("POSTGRES_DB") ?? "preset_shop"};" +
                      $"Username={Environment.GetEnvironmentVariable("POSTGRES_USER") ?? "sa"};" +
                      $"Password={Environment.GetEnvironmentVariable("POSTGRES_PASSWORD") ?? "abc"}";

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Automatically apply database migrations on startup
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    try
    {
        var context = services.GetRequiredService<AppDbContext>();
        var logger = services.GetRequiredService<ILogger<Program>>();

        logger.LogInformation("Applying database migrations...");
        context.Database.Migrate();
        logger.LogInformation("Database migrations applied successfully");
    }
    catch (Exception ex)
    {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while migrating the database");
        throw;
    }
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();
app.Run();
