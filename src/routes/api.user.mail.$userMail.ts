import { globalErrorHandler } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listUserByMail } from "~/app/usecases/user/listUserByMail";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listUserByMail.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}
