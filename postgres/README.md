# PostgreSQL Initialization

This directory contains initialization scripts for the PostgreSQL database.

## How It Works

When the PostgreSQL container starts for the **first time**, it automatically runs any `.sh` or `.sql` files found in `/docker-entrypoint-initdb.d/` (which is mounted from `./postgres/init`).

## Files

- `01-init-db.sh`: Main initialization script that:
  - Grants privileges to the database user
  - Creates required PostgreSQL extensions
  - Can be extended to create additional users or seed data

## Important Notes

1. **Initialization scripts only run once** when the container is first created
2. To re-run initialization:
   ```bash
   # Stop and remove the database container and volume
   docker-compose down -v
   # Start fresh
   docker-compose up -d
   ```

3. The application automatically runs Entity Framework migrations on startup, so you don't need to manually create tables

## Adding Custom Initialization

You can add more scripts:
- `02-seed-data.sql` - Add initial data
- `03-create-indexes.sql` - Create custom indexes
- etc.

Scripts run in alphabetical order.
