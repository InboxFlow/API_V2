import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";

import { ListChannelByIdUsecase } from "./ListChannelByIdUsecase";

class ListChannelByIdController {
  constructor(private listChannelByIdUsecase: ListChannelByIdUsecase) {}

  async handle({ request, params }: ContextType) {
    await isAuthenticated(request);
    return await this.listChannelByIdUsecase.execute(params);
  }
}

export { ListChannelByIdController };
