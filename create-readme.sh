#!/bin/bash

cat > README.md <<'EOF'
# EdenApp

Stack:
- Backend: NestJS (Node)
- Frontend: React
- Database: Postgres
- Package manager: npm

Setup local (repositório raiz)

1. Start DB
   ```bash
   docker-compose up -d
Backend
bash
Copy
cd backend
cp .env.sample .env
npm install
npm run start:dev
Se usar migrations: executar npm run migrate (verificar script).
Frontend
bash
Copy
cd web
cp .env.sample .env
npm install
npm start
Workflows de CI estão em .github/workflows/. Para rodar testes locais, veja cada package.json em backend/ e web/.

Contribuição: ler CONTRIBUTING.md
EOF

echo "✅ README.md criado"


---

## 📜 5. `create-contributing.sh`

```bash
#!/bin/bash

cat > CONTRIBUTING.md <<'EOF'
# Contributing

- Abra uma issue antes de grandes mudanças.
- Use branches com prefixo:
  - feat/, fix/, chore/, refactor/, docs/
- Faça PRs pequenos e auto-explicativos.
- Adote ESLint e Prettier.
- Execute `npm test` antes de abrir PR.
EOF

echo "✅ CONTRIBUTING.md criado"