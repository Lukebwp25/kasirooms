# Cosa serve da Sirplay (DEV e PROD)

### 1) Credenziali e chiavi
- **API Key** per ciascun ambiente (DEV e, quando pronto, PROD).
  - Formato tipico: UUID/alfanumerico lungo.
  - Ambito/permessi: accesso agli endpoint wallet e user-info.
- **Segreto HMAC condiviso** (se applicabile) per la validazione delle richieste:
  - Algoritmo: HMAC-SHA256
  - Schema firma: es. `hex( HMAC_SHA256( "<timestamp>:<raw-body>", HMAC_SECRET ) )`
  - **Finestra temporale** accettata per `X-Timestamp` (es. ±300s) — *confermare*.

### 2) Configurazioni ambiente / rete
- **Base URL API** ufficiale per DEV (e poi PROD), ad es.:
  - DEV: `https://<dev-host>.sirplay.<tld>`
  - PROD: `https://<prod-host>.sirplay.<tld>`
- **Whitelist domini** (se richiesta) per le chiamate in ingresso/uscita:
  - `https://kasirooms.vercel.app`
  - domini **Preview** di Vercel (pattern: `https://kasirooms-<hash>-vercel.app`)
  - eventuale dominio custom in produzione.
- **Rate limits** e **policy retry** (429/5xx) — *documentazione o conferma*.

### 3) Parametri business/identificativi
- **idCustomer / partnerId** da usare negli endpoint wallet (ove richiesto).
- **Mappatura utenti**:
  - conferma del campo identificativo da usare (es. `userId_A`, `externalUserId`) nei vari flussi.
  - utenti di test (DEV): almeno 1 utente con wallet valorizzato.

### 4) Flussi e specifiche API
- **Spec tecniche degli endpoint** in uso (DEV):
  - `GET /api/wallet/balance`
  - `POST /api/wallet/deposit`
  - `POST /api/wallet/withdrawal`
  - eventuali `GET /api/v1/user/info`
- **Formato header**:
  - `X-API-KEY: <API_KEY>`
  - `X-Timestamp: <epoch-seconds>`
  - `X-Signature: <hex HMAC>` quando richiesto.
- **Error model** (schema degli errori): codici 4xx/5xx e payload per diagnosi.

### 5) SSO / JWT (se previsto)
- Parametri JWT da rispettare (se Sirplay valida i token emessi dal nostro `/api/sso/token`):
  - algoritmo: HS256 (o confermare supporto/necessità RS256)
  - `aud`, `iss`, `sub`, `exp` convenuti
  - durata raccomandata (es. 10 minuti)

### 6) Materiale di test
- **Esempi di payload** validi/invalidi per deposito/prelievo.
- **Orari hotline/supporto** e contatto tecnico di riferimento.
