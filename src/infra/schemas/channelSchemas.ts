import { z } from "zod";

const createChannelSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  categoryId: z
    .string({ required_error: "Category id is required" })
    .min(1, "Category is required")
    .uuid("Invalid id"),
});

const deleteChannelSchema = z.object({
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const updateChannelSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
  categoryId: z
    .string({ required_error: "Category id is required" })
    .min(1, "Category is required")
    .uuid("Invalid id"),
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
