import { UserRepository } from "~/app/repositories";

class ListUsersUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.findAll();
    return users.map((user) => user.toJson());
  }
}

export { ListUsersUsecase };
