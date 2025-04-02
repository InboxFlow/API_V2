import {
  globalErrorHandler,
  NoContent,
  NotFoundError,
  Success,
} from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { deleteAllErrorLogs } from "~/app/usecases/errorLog/deleteAllErrorLogs";
import { listErrorLogs } from "~/app/usecases/errorLog/listErrorLogs";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listErrorLogs.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        await deleteAllErrorLogs.handle(args);
        return new NoContent().json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
