import { z } from "zod";

// Check if we're in a build context (Next.js build phase)
// During build, env vars may not be available
const isBuildTime = !process.env.DATABASE_URL && !process.env.REDIS_URL;

// Use a schema that allows optional DATABASE_URL and REDIS_URL during build
const EnvSchema = z.object({
  // Server
  PORT: z.string().default("3000"),
  BASE_URL: z.string().default("http://localhost:3000"),
  
  // Database - optional during build, will be validated at runtime
  DATABASE_URL: z.string().optional(),
  
  // Redis - optional during build, will be validated at runtime
  REDIS_URL: z.string().optional(),
  
  DEFAULT_TTL_SECONDS: z.string().default("86400"),
  MAX_BODY_BYTES: z.string().default("262144"),
});

const parsed = EnvSchema.safeParse(process.env);

// Get parsed data or use defaults
const data = parsed.success ? parsed.data : {
  PORT: "3000",
  BASE_URL: "http://localhost:3000",
  DATABASE_URL: undefined,
  REDIS_URL: undefined,
  DEFAULT_TTL_SECONDS: "86400",
  MAX_BODY_BYTES: "262144",
};

// Validate required vars at runtime (when actually used, not during build)
function validateRequired(key: string, value: string | undefined): string {
  if (!value) {
    if (isBuildTime) {
      // During build, return empty string
      return "";
    }
    // At runtime, throw error
    throw new Error(`Missing required environment variable: ${key}. Check Vercel dashboard.`);
  }
  return value;
}

export const env = {
  PORT: Number(data.PORT || "3000"),
  BASE_URL: data.BASE_URL || "http://localhost:3000",
  DATABASE_URL: validateRequired("DATABASE_URL", data.DATABASE_URL),
  REDIS_URL: validateRequired("REDIS_URL", data.REDIS_URL),
  DEFAULT_TTL_SECONDS: Number(data.DEFAULT_TTL_SECONDS || "86400"),
  MAX_BODY_BYTES: Number(data.MAX_BODY_BYTES || "262144"),
};


