import { neon } from '@neondatabase/serverless';

// Initialize Neon database connection
export function getDb() {
  const databaseUrl = process.env.DATABASE_URL;
  
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set in environment variables');
  }
  
  return neon(databaseUrl);
}

