import { LoaderFunctionArgs } from "@remix-run/node";

import { getPeakDayReport } from "~/app/usecases/call/getPeakDayReport";
import { DashboardPage } from "~/client/pages/DashboardPage";

export const loader = async (context: LoaderFunctionArgs) => {
  const [peakDayReport] = await Promise.all([
    await getPeakDayReport.handle(context),
  ]);

  return { peakDayReport };
};

export default function DashboardRoute() {
  return <DashboardPage />;
}
