import { z } from "zod";

class EnvError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "EnvError";
  }
}

const envSchema = z.object({
  JWT_KEY: z.string().min(1),
  POSTGRES_URL: z.string().min(3),
});

function formatErrorMessage(error: z.ZodError) {
  const title = "Error validating env variables:";
  const lines = Object.entries(error.flatten().fieldErrors).map(
    ([key, value]) => `-> ${key}: ${value}`
  );
  return [title, ...lines].join("\n");
}

const parsedEnv = () => {
  try {
    return envSchema.parse(process.env);
  } catch (error: any) {
    throw new EnvError(formatErrorMessage(error));
  }
};

const env = parsedEnv();

export { env };
