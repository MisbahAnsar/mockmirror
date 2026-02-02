import { NextResponse } from "next/server";
import { initDb } from "@/lib/db/init-pg";

// Initialize database on first call
let initialized = false;

export async function GET() {
  try {
    if (!initialized) {
      await initDb();
      initialized = true;
    }
    return NextResponse.json({ ok: true, message: "Database initialized" });
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

