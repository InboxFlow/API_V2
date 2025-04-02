import { Created, globalErrorHandler, NotFoundError } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { createCall } from "~/app/usecases/call/createCall";

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        return new Created(await createCall.handle(args)).json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
