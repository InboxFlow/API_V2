import { LoaderFunctionArgs } from "@remix-run/node";
import { listCategories } from "~/app/usecases/category/listCategories";

import { listChannels } from "~/app/usecases/channel/listChannels";
import { ChannelPage } from "~/client/pages/ChannelPage";

export const loader = async (context: LoaderFunctionArgs) => {
  // throw new Error("Ops, something went wrong");

  const [channels, categories] = await Promise.all([
    listChannels.handle(context),
    listCategories.handle(context),
  ]);

  return { channels, categories };
};

export default function ChannelsRoute() {
  return <ChannelPage />;
}
