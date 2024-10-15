import { z } from "zod";
import { maskSensitiveData, truncateLargeFields } from "@arkyn/shared";

function transformData(data: string): string {
  return truncateLargeFields(maskSensitiveData(data));
}

const createCallSchema = z.object({
  token: z
    .string()
    .nullable()
    .optional()
    .transform((value) => value || "TOKEN_NOT_SENT"),
  method: z.enum(["GET", "POST", "PUT", "DELETE", "PATCH", "ERROR"], {
    invalid_type_error: "Invalid method",
  }),
  request: z
    .string({ required_error: "Request is required" })
    .min(1, "Request is required")
    .transform(transformData),
  response: z
    .string({ required_error: "Response is required" })
    .min(1, "Response is required")
    .transform(transformData),
  channelId: z
    .string({ required_error: "ChannelId is required" })
    .min(1, "ChannelId is required"),
});

const listCallsSchema = z.object({
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const deleteAllCallsSchema = z.object({
  channelId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const listCallByIdSchema = z.object({
  callId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

export {
  createCallSchema,
  deleteAllCallsSchema,
  listCallByIdSchema,
  listCallsSchema,
};
