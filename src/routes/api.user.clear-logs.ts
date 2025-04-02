import { globalErrorHandler, NoContent, NotFoundError } from "@arkyn/server";
import { ActionFunctionArgs } from "@remix-run/node";

import { clearUserLogs } from "~/app/usecases/user/clearUserLogs";

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        await clearUserLogs.handle(args);
        return new NoContent().json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
