import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { createUser } from "~/app/usecases/user/createUser";
import { listUsers } from "~/app/usecases/user/listUsers";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listUsers.handle();
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        return await createUser.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
