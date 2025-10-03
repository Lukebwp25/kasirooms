// app/api/db/test/route.ts
import { testConnection } from "../../../../lib/db";

export const runtime = "nodejs";

export async function GET() {
  try {
    const result = await testConnection();
    
    if (result.connected) {
      return Response.json({ 
        status: "connected", 
        timestamp: result.timestamp,
        message: "Database connection successful" 
      });
    } else {
      return Response.json({ 
        status: "disconnected", 
        error: result.error,
        message: "Database connection failed" 
      }, { status: 500 });
    }
  } catch (error) {
    return Response.json({ 
      status: "error", 
      error: error instanceof Error ? error.message : "Unknown error",
      message: "Database not configured or connection failed" 
    }, { status: 500 });
  }
}