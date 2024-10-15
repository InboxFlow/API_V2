import { relations } from "drizzle-orm";
import { text, boolean, pgTable } from "drizzle-orm/pg-core";

import { channel } from "./channel";

const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  mail: text("mail").unique().notNull(),
  password: text("password").notNull(),
  verified: boolean("verified").notNull(),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
});

const userRelations = relations(user, ({ many }) => ({
  channels: many(channel),
}));

export { user, userRelations };
