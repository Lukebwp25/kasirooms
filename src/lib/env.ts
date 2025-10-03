// lib/env.ts
const required = (name: string, v: string | undefined) => {
  if (!v || v.trim() === "") throw new Error(`Missing env: ${name}`);
  return v;
};

export const ENV = {
  SIRPLAY_BASE_URL: required("SIRPLAY_BASE_URL", process.env.SIRPLAY_BASE_URL),
  SIRPLAY_API_KEY: required("SIRPLAY_API_KEY", process.env.SIRPLAY_API_KEY),
  HMAC_SECRET: required("HMAC_SECRET", process.env.HMAC_SECRET),
  JWT_SECRET: required("JWT_SECRET", process.env.JWT_SECRET),
  JWT_EXPIRES: process.env.JWT_EXPIRES ?? "10m",
  CORS_ORIGIN: (process.env.CORS_ORIGIN ?? "").split(",").map(s => s.trim()).filter(Boolean),
  DATABASE_URL: process.env.DATABASE_URL, // Optional per Neon
};
