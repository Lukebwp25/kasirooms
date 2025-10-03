// app/api/healthz/route.ts
export const runtime = "nodejs";

export async function GET() {
  return Response.json({ ok: true });
}
