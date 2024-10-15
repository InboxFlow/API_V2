import { globalErrorHandler } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listCallById } from "~/app/usecases/call/listCallById";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listCallById.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}
