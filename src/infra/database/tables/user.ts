import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { channel } from "./channel";

const user = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  mail: text("mail").unique().notNull(),
  password: text("password").notNull(),
  verified: integer("verified", { mode: "boolean" }).notNull(),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
});

const userRelations = relations(user, ({ many }) => ({
  channels: many(channel),
}));

export { user, userRelations };
