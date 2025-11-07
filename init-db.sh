#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    -- Create eden user
    CREATE USER eden WITH PASSWORD 'eden123';

    -- Grant privileges
    GRANT ALL PRIVILEGES ON DATABASE eden_db TO eden;

    -- Connect to eden_db and grant schema privileges
    \c eden_db
    GRANT ALL ON SCHEMA public TO eden;
    GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO eden;
    GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO eden;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO eden;
    ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO eden;
EOSQL

echo "✅ Database and user 'eden' created successfully!"
