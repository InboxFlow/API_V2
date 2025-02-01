import { BadRequestError } from "@arkyn/server";
import { redirect } from "@remix-run/node";

import { User } from "~/app/entities";
import { UserRepository } from "~/app/repositories";
import {
  JwtAdapter,
  PasswordAdapter,
  ValidatorAdapter,
} from "~/infra/adapters";
import { createUserSchema } from "~/infra/schemas/userSchemas";
import { authStorage } from "~/main/storages";

class RegisterUserStrategy {
  constructor(private userRepository: UserRepository) {}

  async execute(formData: any, sessionHeaders: string | null) {
    const validator = new ValidatorAdapter(createUserSchema);
    const { mail, name, password } = validator.formValidate(formData);

    const userExists = await this.userRepository.findByMail(mail);
    if (userExists) throw new BadRequestError("User already exists");

    const passwordAdapter = new PasswordAdapter();
    const passwordHash = await passwordAdapter.hash(password);
    const user = User.create({ mail, name, password: passwordHash });

    await this.userRepository.createUser(user);

    const jwtAdapter = new JwtAdapter();
    const token = await jwtAdapter.sign(user);

    const { getSession, commitSession } = authStorage;
    const session = await getSession(sessionHeaders);

    const sessionData = { ...user.toJson(), token };
    session.set("user", sessionData);

    return redirect("/client/v1/channels", {
      headers: { "Set-Cookie": await commitSession(session) },
    });
  }
}

export { RegisterUserStrategy };
