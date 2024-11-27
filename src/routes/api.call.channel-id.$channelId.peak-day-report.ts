import { globalErrorHandler } from "@arkyn/server";
import { LoaderFunctionArgs } from "@remix-run/node";

import { getPeakDayReport } from "~/app/usecases/call/getPeakDayReport";

export async function loader(args: LoaderFunctionArgs) {
  try {
    return await getPeakDayReport.handle(args);
  } catch (err) {
    return globalErrorHandler(err);
  }
}
