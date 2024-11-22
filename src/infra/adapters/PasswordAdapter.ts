import { BadRequestError, UnprocessableEntityError } from "@arkyn/server";
import { hash as argonHash, verify as argonVerify } from "argon2";

class PasswordAdapter {
  constructor() {}

  async hash(password: string) {
    const passwordHash = await argonHash(password);
    return passwordHash;
  }

  async verify(
    hash: string,
    password: string,
    throwType: "badRequest" | "unprocessableEntity" = "badRequest"
  ) {
    const match = await argonVerify(hash, password);

    if (!match && throwType === "badRequest") {
      throw new BadRequestError("Invalid password");
    }

    if (!match && throwType === "unprocessableEntity") {
      throw new UnprocessableEntityError({
        fieldErrors: { password: "Invalid password" },
      });
    }
  }

  async safeVerify(hash: string, password: string) {
    return await argonVerify(hash, password);
  }
}

export { PasswordAdapter };
