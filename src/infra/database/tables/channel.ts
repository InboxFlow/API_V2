import { relations } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

import { call } from "./call";
import { user } from "./user";

const channel = sqliteTable("channel", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  userId: text("userId").notNull(),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
});

const channelRelations = relations(channel, ({ one, many }) => ({
  call: many(call),
  user: one(user, {
    fields: [channel.userId],
    references: [user.id],
  }),
}));

export { channel, channelRelations };
