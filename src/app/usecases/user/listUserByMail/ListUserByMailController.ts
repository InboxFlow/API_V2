import { LoaderFunctionArgs } from "@remix-run/node";
import { ListUserByMailUsecase } from "./ListUserByMailUsecase";

class ListUserByMailController {
  constructor(private listUserByMailUsecase: ListUserByMailUsecase) {}

  async handle({ params }: LoaderFunctionArgs) {
    return await this.listUserByMailUsecase.execute(params);
  }
}

export { ListUserByMailController };
