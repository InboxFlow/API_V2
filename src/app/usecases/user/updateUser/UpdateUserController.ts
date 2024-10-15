import { extractJsonFromRequest } from "@arkyn/server";
import { ContextType } from "~/main/types";
import { UpdateUserUsecase } from "./UpdateUserUsecase";

class UpdateUserController {
  constructor(private updateUserUsecase: UpdateUserUsecase) {}

  async handle({ request, params }: ContextType) {
    const body = await extractJsonFromRequest(request);
    return await this.updateUserUsecase.execute(body, params);
  }
}

export { UpdateUserController };
