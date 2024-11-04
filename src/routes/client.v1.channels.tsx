import { LoaderFunctionArgs } from "@remix-run/node";
import { listCategories } from "~/app/usecases/category/listCategories";

import { listChannels } from "~/app/usecases/channel/listChannels";
import { ListChannelPage } from "~/client/pages/ListChannelPage";

export const loader = async (context: LoaderFunctionArgs) => {
  const [channels, categories] = await Promise.all([
    listChannels.handle(context),
    listCategories.handle(context),
  ]);

  return { channels, categories };
};

export default function ChannelsRoute() {
  return <ListChannelPage />;
}
