// lib/db.ts
import { neon } from '@neondatabase/serverless';
import { ENV } from './env';

// Crea connessione solo se DATABASE_URL è presente
export const sql = ENV.DATABASE_URL ? neon(ENV.DATABASE_URL) : null;

// Utility per verificare se il DB è configurato
export const isDatabaseConnected = () => !!sql;

// Esempio di query per testare la connessione
export async function testConnection() {
  if (!sql) {
    throw new Error('Database not configured');
  }
  
  try {
    const result = await sql`SELECT NOW() as timestamp`;
    return { connected: true, timestamp: result[0].timestamp };
  } catch (error) {
    console.error('Database connection failed:', error);
    return { connected: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}