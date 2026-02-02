import pg from "pg";

const { Pool } = pg;

// Initialize PostgreSQL connection
export function getDbPool() {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
  });
}

/**
 * Initialize custom tables for MockMirror
 * Better Auth tables are auto-migrated by the CLI
 * Safe to call multiple times - uses IF NOT EXISTS
 */
export async function initDb() {
  const pool = getDbPool();
  
  try {
    // Create links table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS links (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        url TEXT NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        expires_at TIMESTAMP,
        meta JSONB
      );
    `);

    // Create indexes for better query performance
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_links_expires_at ON links(expires_at);
    `);
    
    await pool.query(`
      CREATE INDEX IF NOT EXISTS idx_links_user_id ON links(user_id);
    `);

    console.log("✅ PostgreSQL database initialized");
  } catch (error) {
    console.error("❌ Failed to initialize database:", error);
    // Don't throw - tables might already exist
    // This is safe because we use IF NOT EXISTS
  }
  // Don't close the pool - keep it alive for future queries
}


