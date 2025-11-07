#!/bin/bash

cat > docker-compose.yml <<'EOF'
version: '3.8'
services:
  db:
    image: postgres:15
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: edenapp_dev
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data
  pgadmin:
    image: dpage/pgadmin4
    restart: unless-stopped
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@local
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "8080:80"
volumes:
  db_data:
EOF

echo "✅ docker-compose.yml criado"