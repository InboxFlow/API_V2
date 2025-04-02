import { globalErrorHandler, Success } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listUserByMail } from "~/app/usecases/user/listUserByMail";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await new Success(listUserByMail.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}
