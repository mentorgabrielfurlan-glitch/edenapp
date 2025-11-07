# EdenApp
## Stack
- Backend: NestJS (Node)
- Frontend: React
- Database: Postgres
- Package manager: npm
---
## Setup local (repositório raiz)
### 1) Iniciar banco de dados
Suba o ambiente de desenvolvimento do banco com Docker Compose:
```bash
docker-compose up -d
```
### 2) Backend
```bash
cd backend
cp .env.sample .env
npm install
npm run start:dev
```
Observação: se o projeto usa migrations (TypeORM/Prisma), execute o comando de
migração apropriado (ex.: `npm run migrate`).
### 3) Frontend
```bash
cd web
cp .env.sample .env
npm install
npm start
```
---
## Testes e CI
- Workflows de CI estão em `.github/workflows/`.
- Para rodar testes locais:
 - Backend: `cd backend && npm test`
 - Frontend: `cd web && npm test`
Ajuste os nomes dos scripts caso `package.json` use comandos diferentes (por exemplo
`test:unit`, `start:dev` etc).
---
## Contribuição
Leia o arquivo `CONTRIBUTING.md` para orientações sobre:
- Abrir issues antes de grandes mudanças
- Padrões de branch (ex.: `feat/`, `fix/`, `chore/`, `refactor/`)
- Formato de commits e PRs
- Uso de ESLint / Prettier e execução de `npm test` antes de abrir PR