import Redis from "ioredis";

let redisInstance: Redis | null = null;

export function getRedis(): Redis {
  if (!redisInstance) {
    const REDIS_URL = process.env.REDIS_URL;
    if (!REDIS_URL) {
      throw new Error("REDIS_URL environment variable is not set");
    }
    
    redisInstance = new Redis(REDIS_URL, {
      maxRetriesPerRequest: 2,
      enableReadyCheck: true,
    });
  }
  return redisInstance;
}

// For backward compatibility
export const redis = new Proxy({} as Redis, {
  get(target, prop) {
    return getRedis()[prop as keyof Redis];
  }
});


