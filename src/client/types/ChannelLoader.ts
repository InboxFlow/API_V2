import { loader } from "../../routes/client.v1.channel.$channelId";

type ChannelLoader = Awaited<ReturnType<typeof loader>>;

export type { ChannelLoader };
