import { z } from "zod";

const authSchema = z.object({
  mail: z.string({ required_error: "Mail is required" }).email("Invalid mail"),
  password: z.string({ required_error: "Password is required" }),
});

export { authSchema };
