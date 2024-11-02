import { z } from "zod";

const createCategorySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
});

const deleteCategorySchema = z.object({
  categoryId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const updateCategorySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(1, "Name is required"),
  categoryId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

const listCategoryByIdSchema = z.object({
  categoryId: z.string({ required_error: "Id is required" }).uuid("Invalid id"),
});

export {
  createCategorySchema,
  deleteCategorySchema,
  listCategoryByIdSchema,
  updateCategorySchema,
};
