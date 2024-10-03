import { BadRequestError } from "@arkyn/server";

import { UserRepository } from "~/app/repositories";
import {
  JwtAdapter,
  PasswordAdapter,
  ValidatorAdapter,
} from "~/infra/adapters";
import { authSchema } from "~/infra/schemas/authSchemas";

class SignUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(body: any) {
    const validator = new ValidatorAdapter(authSchema);
    const { mail, password } = validator.formValidate(body);

    const user = await this.userRepository.findByMail(mail);
    if (!user) throw new BadRequestError("User not found");

    const passwordAdapter = new PasswordAdapter();
    await passwordAdapter.verify(user.password, password);

    const jwtAdapter = new JwtAdapter();
    const token = await jwtAdapter.sign(user);

    return { user: user.toJson(), token };
  }
}

export { SignUserUsecase };
