import { ListUsersUsecase } from "./ListUsersUsecase";

class ListUsersController {
  constructor(private listUsersUsecase: ListUsersUsecase) {}

  async handle() {
    return await this.listUsersUsecase.execute();
  }
}

export { ListUsersController };
