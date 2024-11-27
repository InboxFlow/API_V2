import { CallRepository } from "~/app/repositories";
import { GetPeakDayReportController } from "./GetPeakDayReportController";
import { GetPeakDayReportUsecase } from "./GetPeakDayReportUsecase";

const callRepository = new CallRepository();
const getPeakDayReportUsecase = new GetPeakDayReportUsecase(callRepository);
const getPeakDayReportController = new GetPeakDayReportController(
  getPeakDayReportUsecase
);

const getPeakDayReport = getPeakDayReportController;
export { getPeakDayReport };
