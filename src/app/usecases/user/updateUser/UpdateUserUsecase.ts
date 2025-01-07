import { BadRequestError } from "@arkyn/server";

import { UserRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { updateUserSchema } from "~/infra/schemas/userSchemas";
import { isInternalRequest } from "~/main/services";

class UpdateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(body: any, params: any) {
    const validator = new ValidatorAdapter(updateUserSchema);

    const { name, userId } = validator.formValidate({ ...body, ...params });

    const user = await this.userRepository.findById(userId);
    if (!user) throw new BadRequestError("User not found");

    user.update({ name });

    await this.userRepository.updateUser(user);

    const internalRequest = isInternalRequest(body);
    if (internalRequest) return { closeModalKey: "UPDATE_ERROR_LOG_MODAL" };

    return user.toJson();
  }
}

export { UpdateUserUsecase };
