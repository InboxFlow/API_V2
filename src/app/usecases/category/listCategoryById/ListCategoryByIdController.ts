import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";

import { ListCategoryByIdUsecase } from "./ListCategoryByIdUsecase";

class ListCategoryByIdController {
  constructor(private listCategoryByIdUsecase: ListCategoryByIdUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.listCategoryByIdUsecase.execute(params);
  }
}

export { ListCategoryByIdController };
