import { BadRequestError } from "@arkyn/server";
import { verify } from "argon2";

import { UserRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { authSchema } from "~/infra/schemas/authSchemas";
import { generateVerifyToken } from "~/main/services";

class SignUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(body: any) {
    const validator = new ValidatorAdapter(authSchema);
    const { mail, password } = validator.formValidate(body);

    const user = await this.userRepository.findByMail(mail);
    if (!user) throw new BadRequestError("User not found");

    const match = await verify(user.password, password);
    if (!match) throw new BadRequestError("Invalid password");

    const token = await generateVerifyToken(user);
    return { user: user.toJson(), token };
  }
}

export { SignUserUsecase };
