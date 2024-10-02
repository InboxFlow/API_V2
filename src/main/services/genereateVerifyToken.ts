import { SignJWT } from "jose";
import { User } from "~/app/entities";
import { env } from "../config";

async function generateVerifyToken(user: User) {
  const alg = "HS256";
  const secret = new TextEncoder().encode(env.JWT_VERIFY_KEY);
  const token = await new SignJWT({ id: user.id })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("1y")
    .sign(secret);

  return token;
}

export { generateVerifyToken };
