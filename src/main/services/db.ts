import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "~/infra/database/tables";
import { env } from "../config";

const client = postgres(env.POSTGRES_URL);
const db = drizzle(client, { schema });

export { db };
