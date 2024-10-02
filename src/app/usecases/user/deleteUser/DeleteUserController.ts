import { ActionFunctionArgs } from "@remix-run/node";

import { DeleteUserUsecase } from "./DeleteUserUsecase";

class DeleteUserController {
  constructor(private deleteUserUsecase: DeleteUserUsecase) {}

  async handle({ params }: ActionFunctionArgs) {
    return await this.deleteUserUsecase.execute(params);
  }
}

export { DeleteUserController };
