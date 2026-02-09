import { SITE_CONFIG, SERVER_CONFIG, FEATURE_FLAGS } from "./constants";

export const config = {
  site: SITE_CONFIG,
  server: SERVER_CONFIG,
  features: FEATURE_FLAGS,
} as const;

export type Config = typeof config;
