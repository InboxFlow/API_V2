import { loader } from "../../routes/client.v1";

type V2LayoutLoader = Awaited<ReturnType<typeof loader>>;

export type { V2LayoutLoader };
