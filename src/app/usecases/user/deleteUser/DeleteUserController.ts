import { ContextType } from "~/main/types";
import { DeleteUserUsecase } from "./DeleteUserUsecase";

class DeleteUserController {
  constructor(private deleteUserUsecase: DeleteUserUsecase) {}

  async handle({ params }: ContextType) {
    return await this.deleteUserUsecase.execute(params);
  }
}

export { DeleteUserController };
