import { loader } from "../../routes/client.v1.channel.$channelId.error-logs";

type ErrorLogLoader = Awaited<ReturnType<typeof loader>>;

export type { ErrorLogLoader };
