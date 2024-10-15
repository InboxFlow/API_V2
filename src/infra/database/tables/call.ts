import { relations } from "drizzle-orm";
import { text, pgTable } from "drizzle-orm/pg-core";

import { channel } from "./channel";

const call = pgTable("call", {
  id: text("id").primaryKey(),
  method: text("method").notNull(),
  request: text("request").notNull(),
  response: text("response").notNull(),
  token: text("token").notNull(),
  channelId: text("channelId").notNull(),
  createdAt: text("createdAt").notNull(),
  updatedAt: text("updatedAt").notNull(),
});

const callRelations = relations(call, ({ one }) => ({
  channel: one(channel, {
    fields: [call.channelId],
    references: [channel.id],
  }),
}));

export { call, callRelations };
