import { globalErrorHandler, NotFoundError } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { createChannel } from "~/app/usecases/channel/createChannel";
import { listChannels } from "~/app/usecases/channel/listChannels";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await listChannels.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: LoaderFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        return await createChannel.handle(args);
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
