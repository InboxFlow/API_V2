import { extractJsonFromRequest } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { CreateCallUsecase } from "./CreateCallUsecase";

class CreateCallController {
  constructor(private createCallUsecase: CreateCallUsecase) {}

  async handle({ request }: ContextType) {
    await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.createCallUsecase.execute(body);
  }
}

export { CreateCallController };
