import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { GetPeakDayReportUsecase } from "./GetPeakDayReportUsecase";

class GetPeakDayReportController {
  constructor(private getPeakDayReportUsecase: GetPeakDayReportUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.getPeakDayReportUsecase.execute(params);
  }
}

export { GetPeakDayReportController };
