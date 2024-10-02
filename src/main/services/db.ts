import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "~/infra/database/tables";
import { env } from "~/main/config";

const turso = createClient({
  url: env.TURSO_URL,
  authToken: env.TURSO_TOKEN,
});

const db = drizzle(turso, { schema });

export { db };
