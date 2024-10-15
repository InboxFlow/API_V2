import { loader } from "../../routes/client.v1.calls.$channelId";

type CallLoader = Awaited<ReturnType<typeof loader>>;

export type { CallLoader };
