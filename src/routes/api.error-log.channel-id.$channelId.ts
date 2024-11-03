import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { deleteAllErrorLogs } from "~/app/usecases/errorLog/deleteAllErrorLogs";
import { listErrorLogs } from "~/app/usecases/errorLog/listErrorLogs";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listErrorLogs.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        return await deleteAllErrorLogs.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
