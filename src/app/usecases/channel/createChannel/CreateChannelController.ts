import { ActionFunctionArgs } from "@remix-run/node";

import { extractJsonFromRequest } from "~/main/services";
import { CreateChannelUsecase } from "./CreateChannelUsecase";
import { isAuthenticated } from "~/main/middlewares";

class CreateChannelController {
  constructor(private createChannelUsecase: CreateChannelUsecase) {}

  async handle({ request }: ActionFunctionArgs) {
    const user = await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.createChannelUsecase.execute(body, user);
  }
}

export { CreateChannelController };
