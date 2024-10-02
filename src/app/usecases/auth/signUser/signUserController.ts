import { ActionFunctionArgs } from "@remix-run/node";

import { extractJsonFromRequest } from "~/main/services";
import { SignUserUsecase } from "./signUserUsecase";

class SignUserController {
  constructor(private signUserUseCase: SignUserUsecase) {}

  async handle({ request }: ActionFunctionArgs) {
    const body = await extractJsonFromRequest(request);
    return await this.signUserUseCase.execute(body);
  }
}

export { SignUserController };
