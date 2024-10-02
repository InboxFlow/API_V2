import { BadRequestError } from "@arkyn/server";
import { json } from "@remix-run/react";

import { UserRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listUserByMailSchema } from "~/infra/schemas/userSchemas";

class ListUserByMailUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(listUserByMailSchema);
    const { userMail } = validator.formValidate(params);

    const user = await this.userRepository.findByMail(userMail);
    if (!user) throw new BadRequestError("User not found");

    return json(user.toJson());
  }
}

export { ListUserByMailUsecase };
