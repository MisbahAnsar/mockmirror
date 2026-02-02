import { nanoid } from "nanoid";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/services/redis";
import { env } from "@/lib/env";
import { initDb } from "@/lib/db/init-pg";

// Initialize DB on first request
let dbInitialized = false;
async function ensureDbInitialized() {
  if (!dbInitialized) {
    try {
      await initDb();
      dbInitialized = true;
    } catch (error) {
      console.error("Failed to initialize database:", error);
      dbInitialized = true; // Continue anyway
    }
  }
}

const TTL_MIN = 60; // 1 min
const TTL_MAX = 48 * 60 * 60; // 48 hrs

const CreateMockSchema = z.object({
  data: z.any(),
  ttlSeconds: z.number().optional(),
});

export async function POST(request: NextRequest) {
  try {
    await ensureDbInitialized();
    const rawBody = await request.json().catch(() => null);
    const parsed = CreateMockSchema.safeParse(rawBody);
    
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Invalid request body",
          expected: { data: "any json", ttlSeconds: "optional number" },
        },
        { status: 400 }
      );
    }

    const ttlInput = parsed.data.ttlSeconds ?? env.DEFAULT_TTL_SECONDS;
    const ttlSeconds = Math.min(Math.max(ttlInput, TTL_MIN), TTL_MAX);

    const jsonString = JSON.stringify(parsed.data.data);

    if (Buffer.byteLength(jsonString, "utf8") > env.MAX_BODY_BYTES) {
      return NextResponse.json(
        {
          error: "Payload too large",
          maxBytes: env.MAX_BODY_BYTES,
        },
        { status: 413 }
      );
    }

    const now = new Date();
    const expiresAt = new Date(now.getTime() + ttlSeconds * 1000).toISOString();

    // Generate ID and store in Redis
    const id = nanoid(8);
    const key = `mm:v1:mock:${id}`;
    await redis.set(key, jsonString, "EX", ttlSeconds);

    const url = `${env.BASE_URL}/api/v1/${id}`;

    return NextResponse.json({ id, url, expiresAt }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create mock", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
