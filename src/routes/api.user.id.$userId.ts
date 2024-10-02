import { globalErrorHandler } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listUserById } from "~/app/usecases/user/listUserById";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listUserById.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}
