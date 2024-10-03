import { ContextType } from "~/main/types";
import { ListUserByIdUsecase } from "./ListUserByIdUsecase";

class ListUserByIdController {
  constructor(private listUserByIdUsecase: ListUserByIdUsecase) {}

  async handle({ params }: ContextType) {
    return await this.listUserByIdUsecase.execute(params);
  }
}

export { ListUserByIdController };
