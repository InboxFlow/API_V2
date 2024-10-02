import { ActionFunctionArgs } from "@remix-run/node";

import { extractJsonFromRequest } from "~/main/services";
import { UpdateUserUsecase } from "./UpdateUserUsecase";

class UpdateUserController {
  constructor(private updateUserUsecase: UpdateUserUsecase) {}

  async handle({ request, params }: ActionFunctionArgs) {
    const body = await extractJsonFromRequest(request);
    return await this.updateUserUsecase.execute(body, params);
  }
}

export { UpdateUserController };
