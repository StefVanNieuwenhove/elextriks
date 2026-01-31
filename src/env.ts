import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    GOOGLE_APP_EMAIL: z.email().min(1),
    GOOGLE_APP_PASSWORD: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    GOOGLE_APP_EMAIL: process.env.GOOGLE_APP_EMAIL,
    GOOGLE_APP_PASSWORD: process.env.GOOGLE_APP_PASSWORD,
  },
});
