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
