// lib/jwt.ts
import jwt from "jsonwebtoken";
import { ENV } from "./env";

export function signJwt(payload: Record<string, any>): string {
  return jwt.sign(payload, ENV.JWT_SECRET, { 
    algorithm: "HS256", 
    expiresIn: ENV.JWT_EXPIRES 
  } as any);
}
