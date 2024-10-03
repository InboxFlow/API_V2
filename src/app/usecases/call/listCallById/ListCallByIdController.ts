import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { ListCallByIdUsecase } from "./ListCallByIdUsecase";

class ListCallByIdController {
  constructor(private listCallByIdUsecase: ListCallByIdUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.listCallByIdUsecase.execute(params);
  }
}

export { ListCallByIdController };
