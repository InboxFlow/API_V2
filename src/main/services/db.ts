import * as schema from "~/infra/database/tables";
import { env } from "../config";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

declare global {
  var db: PostgresJsDatabase<typeof schema>;
}

let db: PostgresJsDatabase<typeof schema>;

if (process.env.NODE_ENV === "production") {
  db = drizzle(postgres(env.POSTGRES_URL), { schema });
} else {
  if (!global.db) global.db = drizzle(postgres(env.POSTGRES_URL), { schema });
  db = global.db;
}

export { db };
