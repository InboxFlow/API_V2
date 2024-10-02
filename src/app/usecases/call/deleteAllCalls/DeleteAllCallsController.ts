import { ActionFunctionArgs } from "@remix-run/node";

import { isAuthenticated } from "~/main/middlewares";
import { DeleteAllCallsUsecase } from "./DeleteAllCallsUsecase";

class DeleteAllCallsController {
  constructor(private deleteAllCallsUsecase: DeleteAllCallsUsecase) {}

  async handle({ request, params }: ActionFunctionArgs) {
    await isAuthenticated(request);
    return await this.deleteAllCallsUsecase.execute(params);
  }
}

export { DeleteAllCallsController };
