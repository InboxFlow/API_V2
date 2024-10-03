import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { ActionFunctionArgs } from "@remix-run/node";

import { deleteUser } from "~/app/usecases/user/deleteUser";
import { updateUser } from "~/app/usecases/user/updateUser";

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        return await deleteUser.handle(args);
      case "PATCH":
        return await updateUser.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
