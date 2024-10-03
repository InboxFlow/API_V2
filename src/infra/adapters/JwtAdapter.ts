import { BadRequestError } from "@arkyn/server";
import { jwtVerify, SignJWT } from "jose";

import { User } from "~/app/entities";
import { env } from "~/main/config";

class JwtAdapter {
  constructor() {}

  async verify(token: string) {
    try {
      const secret = new TextEncoder().encode(env.JWT_KEY);
      const { payload } = await jwtVerify(token, secret);

      const userId = payload?.id;
      if (typeof userId !== "string") {
        throw new BadRequestError("Invalid token");
      }

      return { userId };
    } catch (error) {
      throw new BadRequestError("Invalid token");
    }
  }

  async sign(user: User) {
    const alg = "HS256";
    const secret = new TextEncoder().encode(env.JWT_KEY);
    const token = await new SignJWT({ id: user.id })
      .setProtectedHeader({ alg })
      .setIssuedAt()
      .setIssuer("urn:example:issuer")
      .setAudience("urn:example:audience")
      .setExpirationTime("1y")
      .sign(secret);

    return token;
  }
}

export { JwtAdapter };
