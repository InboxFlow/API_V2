import { LoaderFunctionArgs } from "@remix-run/node";

import { listCalls } from "~/app/usecases/call/listCalls";
import { listChannelById } from "~/app/usecases/channel/listChannelById";
import { CallPage } from "~/client/pages/CallPage";

export const loader = async (context: LoaderFunctionArgs) => {
  return {
    calls: await listCalls.handle(context),
    channel: await listChannelById.handle(context),
  };
};

export default function CallRoute() {
  return <CallPage />;
}
