import { LoaderFunctionArgs } from "@remix-run/node";

import { listErrorLogs } from "~/app/usecases/errorLog/listErrorLogs";
import { ErrorLogPage } from "~/client/pages/ErrorLogPage";

export const loader = async (context: LoaderFunctionArgs) => {
  const errorLogs = await listErrorLogs.handle(context);
  return { errorLogs };
};

export default function ErrorLogRoute() {
  return <ErrorLogPage />;
}
