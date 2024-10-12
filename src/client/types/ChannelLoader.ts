import { loader } from "../../routes/client.v1.channels";

type ChannelLoader = Awaited<ReturnType<typeof loader>>;

export type { ChannelLoader };
