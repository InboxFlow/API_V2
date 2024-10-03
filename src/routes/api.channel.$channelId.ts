import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { ActionFunctionArgs } from "@remix-run/node";

import { deleteChannel } from "~/app/usecases/channel/deleteChannel";
import { updateChannel } from "~/app/usecases/channel/updateChannel";

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        return await deleteChannel.handle(args);
      case "PATCH":
        return await updateChannel.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
