import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "~/infra/database/tables";
import { env } from "../config";

declare global {
  var _pgClient: ReturnType<typeof postgres> | undefined;
}

if (!global._pgClient) {
  global._pgClient = postgres(env.POSTGRES_URL, {
    max: 5,
    idle_timeout: 10000,
    connect_timeout: 2000,
  });
}

const client = global._pgClient;
const db = drizzle(client, { schema });

export { db };
