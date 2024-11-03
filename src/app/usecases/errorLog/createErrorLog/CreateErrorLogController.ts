import { extractJsonFromRequest } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { CreateErrorLogUsecase } from "./CreateErrorLogUsecase";

class CreateErrorLogController {
  constructor(private createErrorLogUsecase: CreateErrorLogUsecase) {}

  async handle({ request }: ContextType) {
    await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.createErrorLogUsecase.execute(body);
  }
}

export { CreateErrorLogController };
