// app/api/sso/token/route.ts
import { verifyHmac } from "../../../../lib/hmac";
import { signJwt } from "../../../../lib/jwt";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const ts = req.headers.get("x-timestamp");
  const sig = req.headers.get("x-signature");
  const raw = await req.text();

  if (!verifyHmac(ts, raw, sig)) {
    return new Response(JSON.stringify({ error: "invalid signature" }), { status: 401 });
  }

  let body: any;
  try {
    body = JSON.parse(raw);
  } catch {
    return new Response(JSON.stringify({ error: "invalid json body" }), { status: 400 });
  }

  const userId = body.userId ?? body.user_id ?? null;
  if (!userId) {
    return new Response(JSON.stringify({ error: "missing userId" }), { status: 400 });
  }

  const token = signJwt({ sub: userId, scope: ["wallet:read", "profile:read"] });
  return new Response(JSON.stringify({ token, expires_in: "JWT_EXPIRES" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
