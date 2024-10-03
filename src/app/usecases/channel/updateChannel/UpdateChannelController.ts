import { isAuthenticated } from "~/main/middlewares";
import { extractJsonFromRequest } from "~/main/services";
import { ContextType } from "~/main/types";

import { UpdateChannelUsecase } from "./UpdateChannelUsecase";

class UpdateChannelController {
  constructor(private updateChannelUsecase: UpdateChannelUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.updateChannelUsecase.execute(body, params);
  }
}

export { UpdateChannelController };
