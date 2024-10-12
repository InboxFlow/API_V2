import { LoaderFunctionArgs } from "@remix-run/node";

import { listChannels } from "~/app/usecases/channel/listChannels";
import { ChannelPage } from "~/client/pages/ChannelPage";

export const loader = async (context: LoaderFunctionArgs) => {
  return {
    channels: await listChannels.handle(context),
  };
};

export default function ChannelsRoute() {
  return <ChannelPage />;
}
