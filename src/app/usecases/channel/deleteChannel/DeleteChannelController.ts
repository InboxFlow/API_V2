import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { DeleteChannelUsecase } from "./DeleteChannelUsecase";

class DeleteChannelController {
  constructor(private deleteChannelUsecase: DeleteChannelUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.deleteChannelUsecase.execute(params);
  }
}

export { DeleteChannelController };
