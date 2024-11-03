import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { DeleteAllErrorLogsUsecase } from "./DeleteAllErrorLogsUsecase";

class DeleteAllErrorLogsController {
  constructor(private deleteAllErrorLogsUsecase: DeleteAllErrorLogsUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.deleteAllErrorLogsUsecase.execute(params);
  }
}

export { DeleteAllErrorLogsController };
