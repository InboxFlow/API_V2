import { ActionFunctionArgs } from "@remix-run/node";
import { ListCallsUsecase } from "./ListCallsUsecase";
import { isAuthenticated } from "~/main/middlewares";

class ListCallsController {
  constructor(private listCallsUsecase: ListCallsUsecase) {}

  async handle({ request, params }: ActionFunctionArgs) {
    await isAuthenticated(request);
    return await this.listCallsUsecase.execute(params);
  }
}

export { ListCallsController };
