import { BadRequestError } from "@arkyn/server";

import { UserRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listUserByIdSchema } from "~/infra/schemas/userSchemas";

class ListUserByIdUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(listUserByIdSchema);
    const { userId } = validator.formValidate(params);

    const user = await this.userRepository.findById(userId);
    if (!user) throw new BadRequestError("User not found");

    return user.toJson();
  }
}

export { ListUserByIdUsecase };
