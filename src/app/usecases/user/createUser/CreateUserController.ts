import { ActionFunctionArgs } from "@remix-run/node";

import { extractJsonFromRequest } from "~/main/services";
import { CreateUserUsecase } from "./CreateUserUsecase";

class CreateUserController {
  constructor(private createUserUsecase: CreateUserUsecase) {}

  async handle({ request }: ActionFunctionArgs) {
    const body = await extractJsonFromRequest(request);
    return await this.createUserUsecase.execute(body);
  }
}

export { CreateUserController };
