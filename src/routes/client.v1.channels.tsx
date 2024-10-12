import { LoaderFunction } from "@remix-run/node";

import { listChannels } from "~/app/usecases/channel/listChannels";
import { ChannelPage } from "~/client/pages/ChannelPage";

export const loader: LoaderFunction = async (context) => {
  return {
    channels: await listChannels.handle(context),
  };
};

export default function ChannelsRoute() {
  return <ChannelPage />;
}
