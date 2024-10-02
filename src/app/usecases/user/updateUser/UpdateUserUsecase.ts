import { BadRequestError } from "@arkyn/server";
import { json } from "@remix-run/react";

import { UserRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { updateUserSchema } from "~/infra/schemas/userSchemas";

class UpdateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(body: any, params: any) {
    const validator = new ValidatorAdapter(updateUserSchema);

    const { name, userId } = validator.formValidate({ ...body, ...params });

    const user = await this.userRepository.findById(userId);
    if (!user) throw new BadRequestError("User not found");

    user.update({ name });

    await this.userRepository.updateUser(user);

    return json(user.toJson());
  }
}

export { UpdateUserUsecase };
