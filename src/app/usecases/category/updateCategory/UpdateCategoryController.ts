import { extractJsonFromRequest } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";

import { UpdateCategoryUsecase } from "./UpdateCategoryUsecase";

class UpdateCategoryController {
  constructor(private updateCategoryUsecase: UpdateCategoryUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.updateCategoryUsecase.execute(body, params);
  }
}

export { UpdateCategoryController };
