# Checklist di deploy (deterministica)

## Pre-requisiti
- Repo `kasirooms` su Git.
- Funzioni API integrate (cartella `app/api/...`).
- `package.json` contiene `jsonwebtoken`.

## Vercel – Impostazioni progetto
1. Importa repo → Framework: **Next.js** (autodetect).
2. Build command: `next build` (default).
3. Output: automatico.
4. Variabili d’ambiente (Production/Preview/Development):
   - `SIRPLAY_BASE_URL`
   - `SIRPLAY_API_KEY` (placeholder fino a disponibilità reale)
   - `HMAC_SECRET`
   - `JWT_SECRET`
   - `JWT_EXPIRES`
   - `CORS_ORIGIN`
5. Deploy.

## Test post-deploy
- `GET /api/healthz` → `{ "ok": true }`
- `GET /api/v1/player/info?playerId=DEMO` → risposta JSON stub
- `GET /api/wallet/balance?userId_A=DEMO` → proxy verso Sirplay (richiede API key reale)
- `POST /api/sso/token` con HMAC header → genera JWT

## Se qualcosa fallisce
- Controlla **Vercel → Deployments → Function Logs**.
- Errori tipici:
  - `Missing env: ...` → variabile non impostata.
  - `CORS` blocked → manca il dominio in `CORS_ORIGIN`.
  - `MODULE_NOT_FOUND: jsonwebtoken` → installa dipendenza e redeploy.
