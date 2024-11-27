import { useLoaderData } from "@remix-run/react";
import { Activity, Calendar, Clock } from "lucide-react";

import { StatCard } from "~/client/components";
import { CallLoader } from "~/client/types";

import { PeakDayReportContainer } from "./styles";

function PeakDayReport() {
  const { peakDayReport } = useLoaderData<CallLoader>();

  return (
    <PeakDayReportContainer>
      <StatCard
        icon={Calendar}
        scheme="info"
        title="Day peak"
        value={peakDayReport.date}
      />

      <StatCard
        icon={Clock}
        scheme="info"
        title="Hour peak"
        value={peakDayReport.hour}
      />

      <StatCard
        icon={Activity}
        scheme="info"
        title="Quantity"
        value={peakDayReport.quantity}
      />
    </PeakDayReportContainer>
  );
}

export { PeakDayReport };
