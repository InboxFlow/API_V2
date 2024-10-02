import { ActionFunctionArgs } from "@remix-run/node";
import { ListChannelsUsecase } from "./ListChannelsUsecase";
import { isAuthenticated } from "~/main/middlewares";

class ListChannelsController {
  constructor(private listChannelsUsecase: ListChannelsUsecase) {}

  async handle({ request }: ActionFunctionArgs) {
    const user = await isAuthenticated(request);
    return await this.listChannelsUsecase.execute(user);
  }
}

export { ListChannelsController };
