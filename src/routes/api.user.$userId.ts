import {
  globalErrorHandler,
  NoContent,
  NotFoundError,
  Success,
} from "@arkyn/server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { deleteUser } from "~/app/usecases/user/deleteUser";
import { listUserById } from "~/app/usecases/user/listUserById";
import { updateUser } from "~/app/usecases/user/updateUser";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listUserById.handle(args));
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        await deleteUser.handle(args);
        return new NoContent().json();
      case "PATCH":
        return new Success(await updateUser.handle(args)).json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
