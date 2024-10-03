import { BadRequestError, NotFoundError } from "@arkyn/server";

import { UserRepository } from "~/app/repositories";
import { JwtAdapter } from "~/infra/adapters";
import { ContextType } from "~/main/types";

async function isAuthenticated(request: ContextType["request"]) {
  let token = request.headers.get("authorization");
  if (!token) throw new BadRequestError("Token not sent");

  token = token.replace("Bearer ", "").replaceAll(" ", "");

  const userRepository = new UserRepository();
  const jwtAdapter = new JwtAdapter();

  const { userId } = await jwtAdapter.verify(token);

  const userExists = await userRepository.findById(userId);
  if (!userExists) throw new NotFoundError("User not exists");

  return userExists;
}

export { isAuthenticated };
