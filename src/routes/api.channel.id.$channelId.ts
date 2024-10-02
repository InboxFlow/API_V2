import { globalErrorHandler } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { listChannelById } from "~/app/usecases/channel/listChannelById";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listChannelById.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}
