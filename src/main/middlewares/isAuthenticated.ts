import { BadRequestError, NotFoundError } from "@arkyn/server";
import { redirect } from "@remix-run/server-runtime";

import { UserRepository } from "~/app/repositories";
import { JwtAdapter } from "~/infra/adapters";
import { ContextType } from "~/main/types";

import { authStorage } from "../storages";

async function isAuthenticated(request: ContextType["request"]) {
  const { getSession } = authStorage;
  const session = await getSession(request.headers.get("Cookie"));

  const isAPI =
    request.headers.get("X-Requested-With") === "XMLHttpRequest" ||
    request.headers.get("Accept")?.includes("application/json") ||
    request.headers.get("User-Agent")?.includes("Postman") ||
    request.headers.get("Content-Type")?.includes("application/json");

  const user = session.get("user");
  let token = user?.token || request.headers.get("authorization");

  if (!token && isAPI) throw new BadRequestError("Token not sent");
  if (!token && !isAPI) throw redirect("/client/auth");

  token = token.replace("Bearer ", "").replaceAll(" ", "");

  const userRepository = new UserRepository();
  const jwtAdapter = new JwtAdapter();

  const { userId } = await jwtAdapter.verify(token);

  const userExists = await userRepository.findById(userId);
  if (!userExists) throw new NotFoundError("User not exists");

  return userExists;
}

export { isAuthenticated };
