import { LoaderFunctionArgs } from "@remix-run/node";

import { listCalls } from "~/app/usecases/call/listCalls";
import { listCategories } from "~/app/usecases/category/listCategories";
import { listChannelById } from "~/app/usecases/channel/listChannelById";
import { CallPage } from "~/client/pages/CallPage";

export const loader = async (context: LoaderFunctionArgs) => {
  const [calls, channel, categories] = await Promise.all([
    listCalls.handle(context),
    listChannelById.handle(context),
    listCategories.handle(context),
  ]);

  return { calls, channel, categories };
};

export default function CallRoute() {
  return <CallPage />;
}
