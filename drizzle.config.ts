import { defineConfig } from "drizzle-kit";
import { env } from "~/main/config";

import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./src/infra/database/tables/*.ts",
  dialect: "sqlite",
  out: "./src/infra/database/migrations",
  driver: "turso",
  dbCredentials: {
    url: env.TURSO_URL,
    authToken: env.TURSO_TOKEN,
  },
});
