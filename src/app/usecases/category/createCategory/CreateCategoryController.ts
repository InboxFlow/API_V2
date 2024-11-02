import { extractJsonFromRequest } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { CreateCategoryUsecase } from "./CreateCategoryUsecase";

class CreateCategoryController {
  constructor(private createCategoryUsecase: CreateCategoryUsecase) {}

  async handle({ request }: ContextType) {
    const user = await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.createCategoryUsecase.execute(body, user);
  }
}

export { CreateCategoryController };
