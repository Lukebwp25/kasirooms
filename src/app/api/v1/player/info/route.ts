// app/api/v1/player/info/route.ts
export const runtime = "nodejs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const playerId = searchParams.get("playerId");
  if (!playerId) {
    return new Response(JSON.stringify({ error: "missing playerId" }), { status: 400 });
  }
  return Response.json({
    playerId,
    status: "ACTIVE",
    limits: { daily: 1000, monthly: 10000 },
  });
}
