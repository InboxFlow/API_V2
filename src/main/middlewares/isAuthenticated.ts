import { BadRequestError, NotFoundError } from "@arkyn/server";
import { jwtVerify } from "jose";

import { UserRepository } from "~/app/repositories";
import { env } from "../config";

async function isAuthenticated(request: Request) {
  let token = request.headers.get("authorization");
  if (!token) throw new BadRequestError("Token not sent");

  token = token.replace("Bearer ", "").replaceAll(" ", "");

  const userRepository = new UserRepository();

  try {
    const secret = new TextEncoder().encode(env.JWT_KEY);
    const { payload } = await jwtVerify(token, secret);

    const userExists = await userRepository.findById(`${payload.id}`);
    if (!userExists) throw new NotFoundError("User not exists");

    return userExists;
  } catch (error) {
    throw new BadRequestError("Not a valid token");
  }
}

export { isAuthenticated };
