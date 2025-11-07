#!/bin/bash

mkdir -p .github/workflows

cat > .github/workflows/frontend-ci.yml <<'EOF'
name: Frontend CI

on:
  push:
    paths:
      - 'web/**'
  pull_request:
    paths:
      - 'web/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
      - name: Install frontend deps
        run: |
          cd web
          npm ci
      - name: Lint
        run: |
          cd web
          npm run lint || true
      - name: Build
        run: |
          cd web
          npm run build
EOF

echo "✅ .github/workflows/frontend-ci.yml criado"