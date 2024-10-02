import { json } from "@remix-run/react";

import { UserRepository } from "~/app/repositories";

class ListUsersUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute() {
    const users = await this.userRepository.findAll({ limit: 20, offset: 0 });
    return json(users.map((user) => user.toJson()));
  }
}

export { ListUsersUsecase };
