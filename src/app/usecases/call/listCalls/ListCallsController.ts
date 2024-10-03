import { getScopedParams } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { ListCallsUsecase } from "./ListCallsUsecase";

class ListCallsController {
  constructor(private listCallsUsecase: ListCallsUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);

    const filters = getScopedParams(request);

    return await this.listCallsUsecase.execute(params, filters);
  }
}

export { ListCallsController };
