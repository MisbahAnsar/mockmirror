import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/services/redis";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const key = `mm:v1:mock:${id}`;

    const val = await redis.get(key);

    if (!val) {
      return NextResponse.json({ error: "Mock not found" }, { status: 404 });
    }

    return new NextResponse(val, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "public, max-age=60",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch mock", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}


