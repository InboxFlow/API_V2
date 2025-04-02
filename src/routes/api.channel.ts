import {
  Created,
  globalErrorHandler,
  NotFoundError,
  Success,
} from "@arkyn/server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { createChannel } from "~/app/usecases/channel/createChannel";
import { listChannels } from "~/app/usecases/channel/listChannels";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listChannels.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "POST":
        return new Created(await createChannel.handle(args)).json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
