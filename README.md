# Kasirooms – Bundle informativo per deploy su Vercel

Questo pacchetto contiene:
- `README.md`: istruzioni operative.
- `.env.local.example`: template delle variabili d'ambiente.
- `DEPLOY_CHECKLIST.md`: lista dei passi per andare online.
- `SIRPLAY_REQUIREMENTS.md`: elenco **preciso** di ciò che serve da Sirplay (dev/prod).
- `API_TESTS.md`: comandi `curl` per testare gli endpoint.
- `addon/`: mini add-on con API Routes per Vercel (se non le hai già integrate).

## Struttura consigliata del progetto
Il frontend Next.js (`kasirooms`) può includere anche il backend in API Routes:

```
app/
  api/
    healthz/
    v1/player/info/
    wallet/balance/
    sso/token/
lib/
  env.(ts|js)
  cors.(ts|js)
  hmac.(ts|js)
  jwt.(ts|js)
middleware.(ts|js)
vercel.json
```

## Istruzioni rapide
1. **Copia** il contenuto di `addon/` nella root del tuo progetto `kasirooms` (se non già presente).
2. Aggiungi la dipendenza:
   ```bash
   npm i jsonwebtoken
   ```
   (se usi TypeScript: verranno generati automaticamente i tipi da `@types/jsonwebtoken` quando configuri il progetto).
3. In Vercel → Settings → **Environment Variables**, imposta i valori come in `.env.local.example` (senza virgolette) per **Production**, **Preview** e **Development**.
4. Fai il **deploy** su Vercel.
5. Verifica gli endpoint in `API_TESTS.md`.

## Note tecniche
- Le API Routes forzano `runtime = "nodejs"` per usare `node:crypto` e `jsonwebtoken`.
- Le richieste Sirplay passano da proxy (`/api/wallet/balance`) con header `X-API-KEY`.
- L’endpoint `/api/sso/token` richiede `X-Timestamp` e `X-Signature` (HMAC SHA-256 del payload raw).
- CORS: imposta `CORS_ORIGIN` con **tutti** i domini (prod, preview, localhost) separati da virgola.
