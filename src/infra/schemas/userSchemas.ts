import { z } from "zod";

const createUserSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  mail: z
    .string({ required_error: "Mail is required" })
    .min(1, "Mail is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long"),
});

const clearUserLogsSchema = z.object({
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "Password must be at least 8 characters long"),
});

const deleteUserSchema = z.object({
  userId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const updateUserSchema = z.object({
  userId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
});

const listUserByIdSchema = z.object({
  userId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const listUserByMailSchema = z.object({
  userMail: z
    .string({ required_error: "Id is required" })
    .min(1, "Id is required")
    .email("Invalid mail"),
});

export {
  clearUserLogsSchema,
  createUserSchema,
  deleteUserSchema,
  listUserByIdSchema,
  listUserByMailSchema,
  updateUserSchema,
};
