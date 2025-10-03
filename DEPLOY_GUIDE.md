# 🚀 Guida Deploy Vercel + Neon Postgres

## ✅ **Pre-requisiti completati:**
- ✅ Progetto Next.js configurato
- ✅ API Routes integrate
- ✅ Build completato con successo
- ✅ Client Neon Postgres installato
- ✅ Endpoint database test configurato

---

## 🗄️ **STEP 1: Configurazione Neon Postgres**

### 1.1 Crea il database Neon:
1. Vai su [neon.tech](https://neon.tech)
2. Crea un account / accedi
3. Crea un nuovo progetto
4. Copia la **DATABASE_URL** che ti viene fornita

### 1.2 Testa la connessione localmente:
```bash
# Aggiungi al tuo .env.local:
DATABASE_URL=postgresql://user:password@ep-xxxx.neon.tech/dbname?sslmode=require
```

### 1.3 Verifica la connessione:
```bash
curl http://localhost:3001/api/db/test
```

---

## 🌐 **STEP 2: Deploy su Vercel**

### 2.1 Push del codice:
```bash
git add .
git commit -m "feat: integrate API routes and Neon Postgres support"
git push origin main
```

### 2.2 Importa progetto in Vercel:
1. Vai su [vercel.com](https://vercel.com)
2. **Import Project** → seleziona il tuo repository
3. **Framework Preset**: Next.js (auto-detect)
4. **Root Directory**: `./` (default)
5. **Build Command**: `next build` (default)

### 2.3 Configura le Environment Variables:
In Vercel → Settings → Environment Variables, aggiungi:

```bash
# Sirplay (richiedi credenziali reali)
SIRPLAY_BASE_URL=https://api.sirplay.com
SIRPLAY_API_KEY=your-real-api-key-from-sirplay

# Sicurezza (genera valori sicuri)
HMAC_SECRET=super-secure-hmac-secret-min-32-chars
JWT_SECRET=super-secure-jwt-secret-min-32-chars
JWT_EXPIRES=10m

# CORS (aggiungi i tuoi domini)
CORS_ORIGIN=https://yourdomain.vercel.app,https://yourdomain.com

# Database Neon (opzionale)
DATABASE_URL=postgresql://user:password@ep-xxxx.neon.tech/dbname?sslmode=require
```

**💡 Imposta tutte le variabili per:** Production, Preview, Development

---

## 🧪 **STEP 3: Testing Post-Deploy**

### 3.1 Endpoint da testare:
```bash
# Health check
curl https://yourapp.vercel.app/api/healthz

# Database test (se configurato)
curl https://yourapp.vercel.app/api/db/test

# Player info
curl "https://yourapp.vercel.app/api/v1/player/info?playerId=DEMO"

# Wallet balance (richiede API key Sirplay reale)
curl "https://yourapp.vercel.app/api/wallet/balance?userId_A=DEMO"
```

### 3.2 Test SSO con HMAC:
```bash
TS=$(date +%s)
BODY='{"userId":"USR_123"}'
SIG=$(printf "%s:%s" "$TS" "$BODY" | openssl dgst -sha256 -hmac "your-hmac-secret" -r | awk '{print $1}')

curl -X POST "https://yourapp.vercel.app/api/sso/token" \
  -H "Content-Type: application/json" \
  -H "X-Timestamp: $TS" \
  -H "X-Signature: $SIG" \
  -d "$BODY"
```

---

## 🔒 **STEP 4: Sicurezza per Produzione**

### 4.1 Genera segreti sicuri:
```bash
# HMAC_SECRET (32+ caratteri)
openssl rand -hex 32

# JWT_SECRET (32+ caratteri)  
openssl rand -hex 32
```

### 4.2 Domini CORS corretti:
```bash
# Esempio per produzione
CORS_ORIGIN=https://kasirooms.vercel.app,https://kasirooms.com,https://kasirooms-git-main-youruser.vercel.app
```

---

## 📊 **STEP 5: Monitoraggio**

### 5.1 Vercel Dashboard:
- **Functions**: Controlla i log delle API Routes
- **Analytics**: Monitora le performance
- **Deployments**: Verifica lo stato dei deploy

### 5.2 Endpoint di monitoraggio:
- `GET /api/healthz` - Status dell'app
- `GET /api/db/test` - Status database (se configurato)

---

## 🚨 **Troubleshooting Comune**

### Build fails:
- Controlla i log in Vercel → Deployments
- Verifica che tutte le dipendenze siano nel package.json

### API errors:
- Controlla Environment Variables in Vercel
- Verifica i log delle Functions

### CORS errors:
- Aggiungi tutti i domini in `CORS_ORIGIN`
- Include domini di preview Vercel

### Database errors:
- Verifica `DATABASE_URL` corretto
- Controlla che Neon database sia attivo
- Test con `/api/db/test`

---

## 🎯 **Il tuo progetto è pronto per il LIVE!**

✅ **Next.js** configurato e ottimizzato  
✅ **API Routes** complete per Sirplay  
✅ **Neon Postgres** supportato (opzionale)  
✅ **Sicurezza** HMAC + JWT implementata  
✅ **CORS** configurato per domini multipli  
✅ **Environment** configurabile per dev/prod

**🚀 Fai il deploy e sei online!**