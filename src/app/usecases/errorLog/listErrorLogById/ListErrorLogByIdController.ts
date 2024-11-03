import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { ListErrorLogByIdUsecase } from "./ListErrorLogByIdUsecase";

class ListErrorLogByIdController {
  constructor(private listErrorLogByIdUsecase: ListErrorLogByIdUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.listErrorLogByIdUsecase.execute(params);
  }
}

export { ListErrorLogByIdController };
