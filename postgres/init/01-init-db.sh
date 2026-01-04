#!/bin/bash
set -e

echo "Starting database initialization..."

# Create database if it doesn't exist (usually already created by POSTGRES_DB env var)
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    -- Grant all privileges to the user
    GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER;

    -- Create any additional users if needed (example)
    -- CREATE USER app_user WITH PASSWORD 'your_password';
    -- GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO app_user;

    -- Enable required extensions
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    -- You can add additional setup here
    SELECT 'Database initialization completed successfully!' AS status;
EOSQL

echo "Database initialization script completed."
