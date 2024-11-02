import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { DeleteCategoryUsecase } from "./DeleteCategoryUsecase";

class DeleteCategoryController {
  constructor(private deleteCategoryUsecase: DeleteCategoryUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.deleteCategoryUsecase.execute(params);
  }
}

export { DeleteCategoryController };
