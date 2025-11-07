#!/bin/bash

cat > .env.sample <<'EOF'
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=edenapp_dev

# App
PORT=3000
NODE_ENV=development
EOF

echo "✅ .env.sample criado"