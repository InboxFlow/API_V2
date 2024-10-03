import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";
import { ListChannelsUsecase } from "./ListChannelsUsecase";

class ListChannelsController {
  constructor(private listChannelsUsecase: ListChannelsUsecase) {}

  async handle({ request }: ContextType) {
    const user = await isAuthenticated(request);
    return await this.listChannelsUsecase.execute(user);
  }
}

export { ListChannelsController };
