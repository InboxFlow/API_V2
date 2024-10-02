import {
  ServerError,
  UnprocessableEntityError,
  formParse,
} from "@arkyn/server";

import { Schema, z } from "zod";

class ValidateError extends ServerError {
  constructor(message: string) {
    super(message);
    this.name = "ValidateError";
  }
}

function formatErrorMessage(error: z.ZodError) {
  const title = "Error validating:";
  const lines = error.issues.map(
    ({ path, message }) => `-> ${path.join(".")}: ${message}`
  );

  return [title, ...lines].join("\n");
}

class ValidatorAdapter<T extends Schema> {
  constructor(readonly schema: T) {}

  isValid(data: any): boolean {
    return this.schema.safeParse(data).success;
  }

  safeValidate(data: any): z.SafeParseReturnType<z.infer<T>, z.infer<T>> {
    return this.schema.safeParse(data);
  }

  validate(data: any): z.infer<T> {
    try {
      return this.schema.parse(data);
    } catch (error: any) {
      throw new ValidateError(formatErrorMessage(error));
    }
  }

  formValidate(data: any): z.infer<T> {
    const formParsed = formParse([data, this.schema]);

    if (!formParsed.success) {
      throw new UnprocessableEntityError(formParsed);
    }

    return formParsed.data;
  }
}

export { ValidatorAdapter };
