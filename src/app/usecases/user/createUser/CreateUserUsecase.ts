import { BadRequestError } from "@arkyn/server";

import { User } from "~/app/entities";
import { UserRepository } from "~/app/repositories";
import { PasswordAdapter, ValidatorAdapter } from "~/infra/adapters";
import { createUserSchema } from "~/infra/schemas/userSchemas";

class CreateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute(body: any) {
    const validator = new ValidatorAdapter(createUserSchema);
    const { mail, name, password } = validator.formValidate(body);

    const userExists = await this.userRepository.findByMail(mail);
    if (userExists) throw new BadRequestError("User already exists");

    const passwordAdapter = new PasswordAdapter();
    const passwordHash = await passwordAdapter.hash(password);
    const user = User.create({ mail, name, password: passwordHash });

    await this.userRepository.createUser(user);

    return user.toJson();
  }
}

export { CreateUserUsecase };
