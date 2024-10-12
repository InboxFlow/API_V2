import { z } from "zod";

const createChannelSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
});

const deleteChannelSchema = z.object({
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const updateChannelSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const listChannelByIdSchema = z.object({
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

export {
  createChannelSchema,
  deleteChannelSchema,
  listChannelByIdSchema,
  updateChannelSchema,
};
