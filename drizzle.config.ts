import { defineConfig } from "drizzle-kit";
import { env } from "~/main/config";
import * as dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./src/infra/database/tables/*.ts",
  dialect: "postgresql",
  out: "./src/infra/database/migrations",
  dbCredentials: { url: env.POSTGRES_URL },
});
