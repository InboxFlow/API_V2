import {
  globalErrorHandler,
  NoContent,
  NotFoundError,
  Success,
} from "@arkyn/server";
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

import { deleteChannel } from "~/app/usecases/channel/deleteChannel";
import { listChannelById } from "~/app/usecases/channel/listChannelById";
import { updateChannel } from "~/app/usecases/channel/updateChannel";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return new Success(await listChannelById.handle(args)).json();
  } catch (err) {
    return globalErrorHandler(err);
  }
}

export async function action(args: ActionFunctionArgs) {
  try {
    switch (args.request.method) {
      case "DELETE":
        await deleteChannel.handle(args);
        return new NoContent().json();
      case "PATCH":
        return new Success(await updateChannel.handle(args)).json();
      default:
        throw new NotFoundError("Method not allowed");
    }
  } catch (err) {
    return globalErrorHandler(err);
  }
}
