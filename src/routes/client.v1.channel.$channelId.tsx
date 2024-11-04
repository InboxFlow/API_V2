import { LoaderFunctionArgs } from "@remix-run/node";

import { listCategories } from "~/app/usecases/category/listCategories";
import { listChannelById } from "~/app/usecases/channel/listChannelById";
import { ChannelPage } from "~/client/pages/ChannelPage";

export const loader = async (context: LoaderFunctionArgs) => {
  const [channel, categories] = await Promise.all([
    listChannelById.handle(context),
    listCategories.handle(context),
  ]);

  return { channel, categories };
};

export default function ChannelRoute() {
  return <ChannelPage />;
}
