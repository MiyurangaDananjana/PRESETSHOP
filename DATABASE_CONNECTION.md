# How to Connect to PostgreSQL Database

## Connection Details

When running in Docker:
- **Host:** localhost (from your machine) or `db` (from within Docker network)
- **Port:** 5432
- **Database:** preset_shop
- **Username:** sa
- **Password:** abc

## Method 1: Docker CLI (Recommended for Quick Checks)

### Connect to PostgreSQL shell:
```bash
docker-compose exec db psql -U sa -d preset_shop
```

### Common PostgreSQL Commands (inside psql):
```sql
-- List all databases
\l

-- List all tables
\dt

-- List all tables with details
\dt+

-- Describe a table structure
\d table_name

-- List all schemas
\dn

-- List all users/roles
\du

-- Run a SQL query
SELECT * FROM your_table_name;

-- Check current database
SELECT current_database();

-- Exit psql
\q
```

### One-liner commands (from outside psql):
```bash
# List all tables
docker-compose exec db psql -U sa -d preset_shop -c "\dt"

# Run custom SQL
docker-compose exec db psql -U sa -d preset_shop -c "SELECT * FROM users;"

# Get database size
docker-compose exec db psql -U sa -d preset_shop -c "SELECT pg_size_pretty(pg_database_size('preset_shop'));"

# Check active connections
docker-compose exec db psql -U sa -d preset_shop -c "SELECT * FROM pg_stat_activity;"
```

## Method 2: GUI Tools

### A. pgAdmin (Free, Popular)
1. Download: https://www.pgadmin.org/download/
2. Install and open pgAdmin
3. Right-click "Servers" → "Register" → "Server"
4. **General tab:**
   - Name: PresetShop Local
5. **Connection tab:**
   - Host: localhost
   - Port: 5432
   - Database: preset_shop
   - Username: sa
   - Password: abc
6. Click "Save"

### B. DBeaver (Free, Universal)
1. Download: https://dbeaver.io/download/
2. Install and open DBeaver
3. Click "New Database Connection" → Select "PostgreSQL"
4. Enter connection details:
   - Host: localhost
   - Port: 5432
   - Database: preset_shop
   - Username: sa
   - Password: abc
5. Click "Test Connection" → "Finish"

### C. VS Code Extension (If you use VS Code)
1. Install extension: "PostgreSQL" by Chris Kolkman
2. Click the PostgreSQL icon in sidebar
3. Click "+" to add connection
4. Enter: `postgresql://sa:abc@localhost:5432/preset_shop`

### D. Azure Data Studio (Microsoft)
1. Download: https://docs.microsoft.com/en-us/sql/azure-data-studio/download
2. Install PostgreSQL extension
3. New Connection → PostgreSQL
4. Enter connection details

## Method 3: Command Line (psql installed locally)

If you have PostgreSQL client installed on Windows:
```bash
psql -h localhost -p 5432 -U sa -d preset_shop
```

## Method 4: From Your Application Code

The application automatically connects using these environment variables from `.env`:
```
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_DB=preset_shop
POSTGRES_USER=sa
POSTGRES_PASSWORD=abc
```

## Production Environment

For production, the database is NOT exposed externally (no port mapping in docker-compose.prod.yml).

To connect in production:
```bash
# SSH into your server first, then:
docker-compose -f docker-compose.prod.yml exec db psql -U $POSTGRES_USER -d $POSTGRES_DB
```

## Backup and Restore

### Create a backup:
```bash
docker-compose exec db pg_dump -U sa preset_shop > backup.sql
```

### Restore from backup:
```bash
docker-compose exec -T db psql -U sa -d preset_shop < backup.sql
```

### Backup with compression:
```bash
docker-compose exec db pg_dump -U sa -F c preset_shop > backup.dump
```

## Troubleshooting

### Connection refused?
```bash
# Check if database is running
docker-compose ps

# Check database logs
docker-compose logs db

# Restart database
docker-compose restart db
```

### Password authentication failed?
- Make sure you're using the correct credentials from `.env`
- Try stopping and starting fresh: `docker-compose down -v && docker-compose up -d`

### Can't see tables?
- Tables are created by Entity Framework migrations when backend starts
- Check backend logs: `docker-compose logs backend`
