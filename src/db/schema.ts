import { pgTable, text, timestamp, boolean, integer, jsonb } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// =========================================
//  BETTER-AUTH REQUIRED TABLES
// =========================================

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").notNull(),
  updatedAt: timestamp("updated_at").notNull(),
});

// =========================================
//  AI-FOLIO TABLES
// =========================================

export const portfolios = pgTable("portfolios", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id").notNull().references(() => user.id),
  name: text("name").notNull(),
  heroText: text("hero_text"),
  heroSubText: text("hero_sub_text"),
  about: text("about"),
  skills: text("skills").array().default([]),
  location: text("location"),
  username: text("username").notNull(),
  avatar: text("avatar").notNull(),
  links: jsonb("links").default({}),
  company: text("company"),
  followers: integer("followers").default(0),
  following: integer("following").default(0),
  repos: integer("repos").default(0),
  font: text("font").default("inter"),
  colors: jsonb("colors").default({}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const projects = pgTable("projects", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  portfolioId: text("portfolio_id").notNull().references(() => portfolios.id),
  name: text("name").notNull(),
  description: text("description"),
  url: text("url").notNull(),
  homepage: text("homepage"),
  ogImage: text("og_image"),
  stars: integer("stars").default(0),
  forks: integer("forks").default(0),
  language: text("language"),
  topics: text("topics").array().default([]),
  sortOrder: integer("sort_order").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const userRelations = relations(user, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [user.id],
    references: [portfolios.userId],
  }),
}));

export const portfoliosRelations = relations(portfolios, ({ one, many }) => ({
  user: one(user, {
    fields: [portfolios.userId],
    references: [user.id],
  }),
  projects: many(projects),
}));

export const projectsRelations = relations(projects, ({ one }) => ({
  portfolio: one(portfolios, {
    fields: [projects.portfolioId],
    references: [portfolios.id],
  }),
}));