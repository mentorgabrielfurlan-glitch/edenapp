#!/bin/bash

mkdir -p .github/workflows

cat > .github/workflows/backend-ci.yml <<'EOF'
name: Backend CI

on:
  push:
    paths:
      - 'backend/**'
  pull_request:
    paths:
      - 'backend/**'

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_DB: edenapp_test
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install backend deps
        run: |
          cd backend
          npm ci
      - name: Run lint
        run: |
          cd backend
          npm run lint || true
      - name: Run tests
        env:
          DB_HOST: 127.0.0.1
          DB_PORT: 5432
          DB_USER: postgres
          DB_PASS: postgres
          DB_NAME: edenapp_test
        run: |
          cd backend
          npm test
EOF

echo "✅ .github/workflows/backend-ci.yml criado"