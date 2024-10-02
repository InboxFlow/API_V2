import { ActionFunctionArgs } from "@remix-run/node";

import { isAuthenticated } from "~/main/middlewares";
import { extractJsonFromRequest } from "~/main/services";
import { CreateCallUsecase } from "./CreateCallUsecase";

class CreateCallController {
  constructor(private createCallUsecase: CreateCallUsecase) {}

  async handle({ request }: ActionFunctionArgs) {
    await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.createCallUsecase.execute(body);
  }
}

export { CreateCallController };
