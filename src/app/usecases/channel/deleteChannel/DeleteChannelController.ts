import { ActionFunctionArgs } from "@remix-run/node";

import { isAuthenticated } from "~/main/middlewares";
import { DeleteChannelUsecase } from "./DeleteChannelUsecase";

class DeleteChannelController {
  constructor(private deleteChannelUsecase: DeleteChannelUsecase) {}

  async handle({ request, params }: ActionFunctionArgs) {
    await isAuthenticated(request);
    return await this.deleteChannelUsecase.execute(params);
  }
}

export { DeleteChannelController };
