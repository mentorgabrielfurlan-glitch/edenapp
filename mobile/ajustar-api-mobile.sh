#!/bin/bash
set -e

MOBILE_DIR="eden/mobile"
APP_JSON="$MOBILE_DIR/app.json"

echo "🔎 Detectando IP local..."
if command -v ip >/dev/null 2>&1; then
  # Linux
  LOCAL_IP=$(ip route get 1.1.1.1 | awk '{print $7; exit}')
elif command -v ifconfig >/dev/null 2>&1; then
  # macOS
  LOCAL_IP=$(ifconfig | awk '/inet / && $2 !~ /127.0.0.1/ {print $2; exit}')
else
  echo "❌ Não foi possível detectar IP (faltam 'ip' ou 'ifconfig')."
  exit 1
fi

if [[ -z "$LOCAL_IP" ]]; then
  echo "❌ IP local não detectado."
  exit 1
fi

API_URL="http://$LOCAL_IP:3000"
echo "🌐 IP detectado: $LOCAL_IP"
echo "🔗 Novo API_URL: $API_URL"

# Verificar se backend responde
echo "🧪 Testando backend em $API_URL/health ..."
if curl -s "$API_URL/health" | grep -qi '"status"' ; then
  echo "✅ Backend acessível pelo IP detectado."
else
  echo "⚠️ Aviso: Não consegui validar $API_URL/health."
  echo "   - Verifique se o backend está rodando e se firewall permite acesso."
  echo "   - Siga adiante se tiver certeza do IP."
fi

# Atualizar app.json (substitui apenas a linha do API_URL em extra)
if [ ! -f "$APP_JSON" ]; then
  echo "❌ Arquivo $APP_JSON não encontrado."
  exit 1
fi

# Faz backup
cp "$APP_JSON" "$APP_JSON.bak"

# Atualiza a chave API_URL em JSON simples (linha contendo \"API_URL\")
# Mantém formatação básica
if grep -q '"API_URL":' "$APP_JSON"; then
  sed -i.bak2 "s#\"API_URL\"[^\n]*#\"API_URL\": \"$API_URL\"#g" "$APP_JSON"
else
  # Insere dentro de \"extra\": { ... }
  # Insere após a chave \"eas\" se existir, senão cria extra
  if grep -q '"extra": {' "$APP_JSON"; then
    # Tenta inserir uma linha após a abertura de extra
    awk -v url="$API_URL" '
      BEGIN{ins=0}
      /\"extra\": \{/ && ins==0 {print; print "      \"API_URL\": \"" url "\","; ins=1; next}
      {print}
    ' "$APP_JSON" > "$APP_JSON.tmp" && mv "$APP_JSON.tmp" "$APP_JSON"
  else
    # Insere bloco extra inteiro antes de fechar "expo"
    awk -v url="$API_URL" '
      /\"expo\": \{/ {print; inexpo=1; next}
      inexpo && /}/ && depth==0 {
        print "    ,\"extra\": {";
        print "      \"eas\": { \"projectId\": \"local-dev\" },";
        print "      \"API_URL\": \"" url "\"";
        print "    }";
        print "  }";
        inexpo=0; next
      }
      {print}
    ' "$APP_JSON" > "$APP_JSON.tmp" && mv "$APP_JSON.tmp" "$APP_JSON"
  fi
fi

echo "📝 $APP_JSON atualizado com API_URL = $API_URL"
echo "📦 Recomendo limpar cache do Expo Metro."

echo
echo "➡️ Passos seguintes:"
echo "  1) cd eden/mobile"
echo "  2) npx expo start -c"
echo "  3) Abra o app no Expo Go e teste login/registro"
