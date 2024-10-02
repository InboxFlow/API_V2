import { LoaderFunctionArgs } from "@remix-run/node";
import { ListChannelByIdUsecase } from "./ListChannelByIdUsecase";
import { isAuthenticated } from "~/main/middlewares";

class ListChannelByIdController {
  constructor(private listChannelByIdUsecase: ListChannelByIdUsecase) {}

  async handle({ request, params }: LoaderFunctionArgs) {
    await isAuthenticated(request);
    return await this.listChannelByIdUsecase.execute(params);
  }
}

export { ListChannelByIdController };
