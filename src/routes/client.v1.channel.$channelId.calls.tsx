import { LoaderFunctionArgs } from "@remix-run/node";

import { listCalls } from "~/app/usecases/call/listCalls";
import { CallPage } from "~/client/pages/CallPage";

export const loader = async (context: LoaderFunctionArgs) => {
  const calls = await listCalls.handle(context);
  return { calls };
};

export default function ChannelRoute() {
  return <CallPage />;
}
