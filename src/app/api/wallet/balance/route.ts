// app/api/wallet/balance/route.ts
import { ENV } from "../../../../lib/env";
export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId_A = searchParams.get("userId_A");
  if (!userId_A) {
    return new Response(JSON.stringify({ error: "missing userId_A" }), { status: 400 });
  }

  const url = new URL("/wallet/balance", ENV.SIRPLAY_BASE_URL);
  url.searchParams.set("userId_A", userId_A);

  const resp = await fetch(url.toString(), {
    headers: { "X-API-KEY": ENV.SIRPLAY_API_KEY },
    cache: "no-store",
  });

  const text = await resp.text();
  return new Response(text, {
    status: resp.status,
    headers: { "Content-Type": resp.headers.get("content-type") || "application/json" },
  });
}
