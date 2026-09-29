export interface RateLimitConfig {
  /** Storage key; forms sharing a key share one limit. */
  key: string;
  /** Max submissions allowed inside `windowMs`. */
  maxSubmissions: number;
  windowMs: number;
  /** Minimum gap between two consecutive submissions. */
  cooldownMs: number;
}

// Fallback for when localStorage is blocked (private mode, disabled site data).
const memoryStore = new Map<string, number[]>();

const readTimestamps = (key: string): number[] => {
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) {
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed.filter((t): t is number => typeof t === 'number');
      }
    }
  } catch {
    // Fall through to the in-memory copy.
  }
  return memoryStore.get(key) ?? [];
};

const writeTimestamps = (key: string, timestamps: number[]) => {
  memoryStore.set(key, timestamps);
  try {
    localStorage.setItem(key, JSON.stringify(timestamps));
  } catch {
    // Storage unavailable; the in-memory copy still limits this session.
  }
};

const getRecentTimestamps = ({ key, windowMs }: RateLimitConfig, now: number) =>
  readTimestamps(key)
    .filter((t) => t <= now && now - t < windowMs)
    .sort((a, b) => a - b);

/** Milliseconds until another submission is allowed; 0 means allowed now. */
export const getRetryAfterMs = (config: RateLimitConfig, now = Date.now()): number => {
  const recent = getRecentTimestamps(config, now);
  if (recent.length === 0) return 0;

  const cooldownWait = recent[recent.length - 1] + config.cooldownMs - now;
  // Once the window is full, a slot frees up when the oldest counted submission expires.
  const windowWait =
    recent.length >= config.maxSubmissions
      ? recent[recent.length - config.maxSubmissions] + config.windowMs - now
      : 0;

  return Math.max(0, cooldownWait, windowWait);
};

export const recordSubmission = (config: RateLimitConfig, now = Date.now()) => {
  writeTimestamps(config.key, [...getRecentTimestamps(config, now), now]);
};
