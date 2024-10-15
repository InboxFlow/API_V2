import { extractJsonFromRequest } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { CreateChannelUsecase } from "./CreateChannelUsecase";

class CreateChannelController {
  constructor(private createChannelUsecase: CreateChannelUsecase) {}

  async handle({ request }: ContextType) {
    const user = await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.createChannelUsecase.execute(body, user);
  }
}

export { CreateChannelController };
