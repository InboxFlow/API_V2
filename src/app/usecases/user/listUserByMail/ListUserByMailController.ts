import { ContextType } from "~/main/types";
import { ListUserByMailUsecase } from "./ListUserByMailUsecase";

class ListUserByMailController {
  constructor(private listUserByMailUsecase: ListUserByMailUsecase) {}

  async handle({ params }: ContextType) {
    return await this.listUserByMailUsecase.execute(params);
  }
}

export { ListUserByMailController };
