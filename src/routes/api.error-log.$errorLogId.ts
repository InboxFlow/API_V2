import { globalErrorHandler } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listErrorLogById } from "~/app/usecases/errorLog/listErrorLogById";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listErrorLogById.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}
