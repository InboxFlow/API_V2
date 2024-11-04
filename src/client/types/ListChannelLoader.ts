import { loader } from "../../routes/client.v1.channels";

type ListChannelLoader = Awaited<ReturnType<typeof loader>>;

export type { ListChannelLoader };
