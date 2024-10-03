import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { DeleteAllCallsUsecase } from "./DeleteAllCallsUsecase";

class DeleteAllCallsController {
  constructor(private deleteAllCallsUsecase: DeleteAllCallsUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.deleteAllCallsUsecase.execute(params);
  }
}

export { DeleteAllCallsController };
