import { BadRequestError } from "@arkyn/server";

import { UserRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { deleteUserSchema } from "~/infra/schemas/userSchemas";

class DeleteUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(deleteUserSchema);
    const { userId } = validator.formValidate(params);

    const userExists = await this.userRepository.findById(userId);
    if (!userExists) throw new BadRequestError("User not found");

    await this.userRepository.deleteUser(userId);

    return null;
  }
}

export { DeleteUserUsecase };
