# Test API (curl)

## Health
curl -i "https://<DOMINIO_VERCEL>/api/healthz"

## Player info (stub)
curl -i "https://<DOMINIO_VERCEL>/api/v1/player/info?playerId=DEMO"

## Wallet balance (proxy Sirplay) — richiede SIRPLAY_API_KEY reale
curl -i "https://<DOMINIO_VERCEL>/api/wallet/balance?userId_A=DEMO"

## SSO token (HMAC)
TS=$(date +%s)
BODY='{"userId":"USR_OP_123"}'
SIG=$(printf "%s:%s" "$TS" "$BODY" | openssl dgst -sha256 -hmac "$HMAC_SECRET" -r | awk '{print $1}')
curl -i -X POST "https://<DOMINIO_VERCEL>/api/sso/token" \
  -H "Content-Type: application/json" \
  -H "X-Timestamp: $TS" \
  -H "X-Signature: $SIG" \
  -d "$BODY"
