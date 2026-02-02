import { NextRequest, NextResponse } from "next/server";

// This endpoint is no longer needed without auth
// Keeping it for backward compatibility but returning empty response
export async function GET(request: NextRequest) {
  return NextResponse.json({ 
    links: [],
    message: "Links feature requires authentication. Use /api/v1/mocks to create endpoints without auth."
  });
}
