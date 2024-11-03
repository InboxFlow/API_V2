import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { createErrorLog } from "~/app/usecases/errorLog/createErrorLog";

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        return await createErrorLog.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    console.error(err);
    return globalErrorHandler(err);
  }
}
