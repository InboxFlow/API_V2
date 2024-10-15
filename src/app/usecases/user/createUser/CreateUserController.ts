import { extractJsonFromRequest } from "@arkyn/server";
import { ContextType } from "~/main/types";
import { CreateUserUsecase } from "./CreateUserUsecase";

class CreateUserController {
  constructor(private createUserUsecase: CreateUserUsecase) {}

  async handle({ request }: ContextType) {
    const body = await extractJsonFromRequest(request);
    return await this.createUserUsecase.execute(body);
  }
}

export { CreateUserController };
