import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from "./schema";
import { config } from "dotenv";

config({ path: ".env.local" });

const connectionString = process.env.POSTGRES_URL_NON_POOLING || process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("Missing POSTGRES_URL or DATABASE_URL environment variable");
}

const client = postgres(connectionString);
export const db = drizzle(client, { schema });