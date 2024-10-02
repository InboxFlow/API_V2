import { LoaderFunctionArgs } from "@remix-run/node";
import { ListCallByIdUsecase } from "./ListCallByIdUsecase";
import { isAuthenticated } from "~/main/middlewares";

class ListCallByIdController {
  constructor(private listCallByIdUsecase: ListCallByIdUsecase) {}

  async handle({ request, params }: LoaderFunctionArgs) {
    await isAuthenticated(request);
    return await this.listCallByIdUsecase.execute(params);
  }
}

export { ListCallByIdController };
