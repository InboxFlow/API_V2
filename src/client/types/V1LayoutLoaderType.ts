import { loader } from "../../routes/client.v1";

type V1LayoutLoaderType = Awaited<ReturnType<typeof loader>>;

export type { V1LayoutLoaderType };
