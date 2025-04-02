import { globalErrorHandler, NotFoundError, Success } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { signUser } from "~/app/usecases/auth/signUser";

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        return new Success(await signUser.handle(args)).json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
