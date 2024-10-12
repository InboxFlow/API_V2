import { BadRequestError } from "@arkyn/server";
import { hash as argonHash, verify as argonVerify } from "argon2";

class PasswordAdapter {
  constructor() {}

  async hash(password: string) {
    const passwordHash = await argonHash(password);
    return passwordHash;
  }

  async verify(hash: string, password: string) {
    const match = await argonVerify(hash, password);
    if (!match) throw new BadRequestError("Invalid password");
  }

  async safeVerify(hash: string, password: string) {
    return await argonVerify(hash, password);
  }
}

export { PasswordAdapter };
