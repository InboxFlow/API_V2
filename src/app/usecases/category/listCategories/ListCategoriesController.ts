import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { ListCategoriesUsecase } from "./ListCategoriesUsecase";

class ListCategoriesController {
  constructor(private listCategoriesUsecase: ListCategoriesUsecase) {}

  async handle({ request }: ContextType) {
    const user = await isAuthenticated(request);
    return await this.listCategoriesUsecase.execute(user);
  }
}

export { ListCategoriesController };
