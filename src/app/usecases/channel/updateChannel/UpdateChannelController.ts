import { ActionFunctionArgs } from "@remix-run/node";

import { isAuthenticated } from "~/main/middlewares";
import { extractJsonFromRequest } from "~/main/services";
import { UpdateChannelUsecase } from "./UpdateChannelUsecase";

class UpdateChannelController {
  constructor(private updateChannelUsecase: UpdateChannelUsecase) {}

  async handle({ request, params }: ActionFunctionArgs) {
    await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.updateChannelUsecase.execute(body, params);
  }
}

export { UpdateChannelController };
