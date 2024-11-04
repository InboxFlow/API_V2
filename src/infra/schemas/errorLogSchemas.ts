import { z } from "zod";
import { REQUEST_METHODS } from "~/app/template";

const createErrorLogSchema = z.object({
  method: z
    .string({ required_error: "Method is required" })
    .min(1, "Method is required")
    .refine((data) => REQUEST_METHODS.includes(data), {
      message: "Invalid method",
    }),
  params: z
    .string({ required_error: "ChannelId is required" })
    .min(1, "ChannelId is required"),
  message: z
    .string({ required_error: "Message is required" })
    .min(1, "Message is required"),
  request: z
    .string({ required_error: "Request is required" })
    .min(1, "Request is required"),
  channelId: z
    .string({ required_error: "ChannelId is required" })
    .min(1, "ChannelId is required"),
});

const listErrorLogsSchema = z.object({
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const deleteAllErrorLogsSchema = z.object({
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const listErrorLogByIdSchema = z.object({
  errorLogId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

export {
  createErrorLogSchema,
  deleteAllErrorLogsSchema,
  listErrorLogByIdSchema,
  listErrorLogsSchema,
};
