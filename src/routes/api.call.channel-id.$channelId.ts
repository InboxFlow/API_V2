import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { deleteAllCalls } from "~/app/usecases/call/deleteAllCalls";
import { listCalls } from "~/app/usecases/call/listCalls";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listCalls.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        return await deleteAllCalls.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
