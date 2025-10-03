// lib/cors.ts
import { NextRequest, NextResponse } from "next/server";
import { ENV } from "./env";

export function corsHeaders(origin: string | null) {
  const allow = origin && ENV.CORS_ORIGIN.length
    ? ENV.CORS_ORIGIN.includes(origin)
    : true;
  const headers: Record<string, string> = {
    "Vary": "Origin",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-Timestamp,X-Signature",
  };
  if (allow && origin) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

export function handleOptions(req: NextRequest) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, { status: 204, headers: corsHeaders(origin) });
}

export function withCors(resp: Response, origin: string | null) {
  const h = corsHeaders(origin);
  const r = new Response(resp.body, resp);
  Object.entries(h).forEach(([k, v]) => r.headers.set(k, v));
  return r;
}
