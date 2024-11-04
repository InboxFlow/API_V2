import { loader } from "../../routes/client.v1.channel.$channelId.calls";

type CallLoader = Awaited<ReturnType<typeof loader>>;

export type { CallLoader };
