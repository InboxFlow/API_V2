import { globalErrorHandler } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listCalls } from "~/app/usecases/call/listCalls";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listCalls.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}
