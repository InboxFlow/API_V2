import { globalErrorHandler, Success } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listCallById } from "~/app/usecases/call/listCallById";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listCallById.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}
