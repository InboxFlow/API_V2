import { loader } from "../../routes/client.v1";

type V1LayoutLoader = Awaited<ReturnType<typeof loader>>;

export type { V1LayoutLoader };
