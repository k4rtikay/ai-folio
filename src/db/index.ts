import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from "./schema";
import { config } from "dotenv";

config({ path: ".env.local" }); // Ensure env vars are loaded if not in Next context

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("Missing POSTGRES_URL or DATABASE_URL environment variable");
}

const pool = new Pool({
    connectionString: connectionString,
});

export const db = drizzle(pool, { schema });
