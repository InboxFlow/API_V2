import { getScopedParams } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { ListErrorLogsUsecase } from "./ListErrorLogsUsecase";

class ListErrorLogsController {
  constructor(private listErrorLogsUsecase: ListErrorLogsUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);

    const filters = getScopedParams(request);

    return await this.listErrorLogsUsecase.execute(params, filters);
  }
}

export { ListErrorLogsController };
