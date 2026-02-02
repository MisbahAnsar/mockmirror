import { NextResponse } from "next/server";
import { initDb } from "@/lib/db/init-pg";

// Initialize DB on first call
let dbInitialized = false;

export async function GET() {
  try {
    if (!dbInitialized) {
      await initDb();
      dbInitialized = true;
    }
    return NextResponse.json({ 
      ok: true, 
      service: "mockmirror-api",
      env: {
        hasDatabase: !!process.env.DATABASE_URL,
        hasRedis: !!process.env.REDIS_URL,
      }
    });
  } catch (error) {
    return NextResponse.json(
      { 
        ok: false, 
        error: error instanceof Error ? error.message : String(error) 
      },
      { status: 500 }
    );
  }
}


