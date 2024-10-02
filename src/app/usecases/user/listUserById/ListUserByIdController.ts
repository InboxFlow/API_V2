import { LoaderFunctionArgs } from "@remix-run/node";
import { ListUserByIdUsecase } from "./ListUserByIdUsecase";

class ListUserByIdController {
  constructor(private listUserByIdUsecase: ListUserByIdUsecase) {}

  async handle({ params }: LoaderFunctionArgs) {
    return await this.listUserByIdUsecase.execute(params);
  }
}

export { ListUserByIdController };
