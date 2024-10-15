import { extractJsonFromRequest } from "@arkyn/server";

import { ContextType } from "~/main/types";
import { SignUserUsecase } from "./signUserUsecase";

class SignUserController {
  constructor(private signUserUseCase: SignUserUsecase) {}

  async handle({ request }: ContextType) {
    const body = await extractJsonFromRequest(request);
    return await this.signUserUseCase.execute(body);
  }
}

export { SignUserController };
