// lib/hmac.ts
import crypto from "node:crypto";
import { ENV } from "./env";

export function verifyHmac(timestamp: string | null, rawBody: string, signature: string | null): boolean {
  if (!timestamp || !signature) return false;
  const msg = `${timestamp}:${rawBody}`;
  const expected = crypto.createHmac("sha256", ENV.HMAC_SECRET).update(msg).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(signature, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}
