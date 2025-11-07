# 🚀 INÍCIO RÁPIDO - ÉDEN

## ✅ Setup Concluído!

Tudo está instalado e configurado. Agora você pode iniciar o projeto!

## 🎯 Opções de Inicialização

### 1️⃣ Iniciar TUDO de uma vez (Recomendado para desenvolvimento)

\`\`\`bash
./start-all.sh
\`\`\`

Isso iniciará:
- 🐘 PostgreSQL (porta 5432)
- 🔴 Redis (porta 6379)
- 🔧 Backend API (porta 3000)
- 🌐 Web App (porta 5173)
- 📱 Mobile App (Expo DevTools)

### 2️⃣ Iniciar serviços individualmente

**Apenas Backend:**
\`\`\`bash
./start-backend.sh
\`\`\`

**Apenas Web:**
\`\`\`bash
./start-web.sh
\`\`\`

**Apenas Mobile:**
\`\`\`bash
./start-mobile.sh
\`\`\`

## 📱 Testar Mobile no Celular

1. **Instale o Expo Go** no seu celular:
   - [Android - Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Inicie o mobile:**
   \`\`\`bash
   ./start-mobile.sh
   \`\`\`

3. **Escaneie o QR code:**
   - Android: Use o Expo Go para escanear
   - iOS: Use a câmera nativa para escanear

## 🗄️ Configurar Banco de Dados

### Primeira vez (criar tabelas):

\`\`\`bash
cd backend
npm run prisma:migrate
\`\`\`

### Visualizar/Editar dados (Prisma Studio):

\`\`\`bash
cd backend
npm run prisma:studio
\`\`\`

Abrirá uma interface web em http://localhost:5555

## 🔧 Configurações Importantes

### Backend (.env)

Edite \`backend/.env\` para configurar:
- ✅ DATABASE_URL (já configurado para Docker)
- ⚠️ JWT_SECRET (mude em produção!)
- ⚠️ Google OAuth (se quiser login com Google)
- ⚠️ Firebase (para notificações push)

### Web (.env)

Edite \`web/.env\`:
- ✅ VITE_API_URL (já configurado para localhost:3000)

## 📍 URLs dos Serviços

Após iniciar tudo:

- 🔧 **Backend API:** http://localhost:3000
- 🌐 **Web App:** http://localhost:5173
- 📱 **Mobile:** Expo DevTools (abre automaticamente)
- 🗄️ **Prisma Studio:** http://localhost:5555 (quando executar)

## 🐛 Solução de Problemas

### Porta já em uso

\`\`\`bash
# Ver o que está usando a porta 3000
sudo lsof -i :3000

# Matar o processo
kill -9 <PID>
\`\`\`

### Docker não inicia

\`\`\`bash
# Verificar status
sudo systemctl status docker

# Reiniciar
sudo systemctl restart docker
\`\`\`

### Erro "Cannot find module"

\`\`\`bash
# No diretório com problema (backend, web ou mobile)
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Prisma não conecta ao banco

\`\`\`bash
# Verificar se PostgreSQL está rodando
docker ps

# Se não estiver, inicie:
docker-compose up -d postgres
\`\`\`

## 🎨 Próximos Passos

1. ✅ Execute \`./start-all.sh\` para testar tudo
2. 📱 Teste o mobile no seu celular com Expo Go
3. 🗄️ Execute as migrações do Prisma
4. 🎨 Comece a desenvolver!

## 📚 Comandos Úteis

\`\`\`bash
# Ver logs do Docker
docker-compose logs -f

# Parar todos os serviços Docker
docker-compose down

# Reiniciar um serviço específico
docker-compose restart postgres

# Ver status dos containers
docker-compose ps

# Limpar tudo (cuidado: apaga dados!)
docker-compose down -v
\`\`\`

## 🌿 Estrutura do Projeto

\`\`\`
eden/
├── backend/              # NestJS API
│   ├── src/
│   ├── prisma/
│   └── .env
├── web/                  # React + Vite PWA
│   ├── src/
│   └── .env
├── mobile/               # React Native + Expo
│   └── src/
├── docker-compose.yml    # PostgreSQL + Redis
├── start-all.sh         # 🚀 Iniciar tudo
├── start-backend.sh
├── start-web.sh
└── start-mobile.sh
\`\`\`

## 💡 Dicas

- Use **Prisma Studio** para visualizar/editar dados facilmente
- Use **Expo Go** no celular para testar rapidamente
- Use **docker-compose logs -f** para debug
- Mantenha os serviços Docker rodando durante desenvolvimento

## 🆘 Precisa de Ajuda?

Consulte os arquivos:
- \`README-SETUP.md\` - Documentação completa
- \`SETUP.md\` - Guia detalhado original
- \`PROJECT_SUMMARY.md\` - Visão geral do projeto

---

**🌿 Boa jornada de transformação!**
