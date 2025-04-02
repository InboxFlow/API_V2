import {
  globalErrorHandler,
  NoContent,
  NotFoundError,
  Success,
} from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { deleteAllCalls } from "~/app/usecases/call/deleteAllCalls";
import { listCalls } from "~/app/usecases/call/listCalls";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listCalls.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        await deleteAllCalls.handle(args);
        return new NoContent().json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
