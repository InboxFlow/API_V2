import { ActionFunctionArgs } from "@remix-run/node";
import { ListCallsUsecase } from "./ListCallsUsecase";
import { isAuthenticated } from "~/main/middlewares";
import { getScopedParams } from "@arkyn/server";

class ListCallsController {
  constructor(private listCallsUsecase: ListCallsUsecase) {}

  async handle({ request, params }: ActionFunctionArgs) {
    await isAuthenticated(request);

    const filters = getScopedParams(request);

    return await this.listCallsUsecase.execute(params, filters);
  }
}

export { ListCallsController };
