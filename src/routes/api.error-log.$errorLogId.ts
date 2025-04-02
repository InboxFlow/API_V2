import { globalErrorHandler, Success } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listErrorLogById } from "~/app/usecases/errorLog/listErrorLogById";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listErrorLogById.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}
