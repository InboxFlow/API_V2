import { redirect } from "@remix-run/node";

import { UserRepository } from "~/app/repositories";
import {
  JwtAdapter,
  PasswordAdapter,
  ValidatorAdapter,
} from "~/infra/adapters";
import { authSchema } from "~/infra/schemas/authSchemas";
import { authStorage } from "~/main/storages";

class AuthenticateUserStrategy {
  constructor(private userRepository: UserRepository) {}

  async execute(formData: any, sessionHeaders: string | null) {
    const validator = new ValidatorAdapter(authSchema);
    const { mail, password } = validator.formValidate(formData);

    const user = await this.userRepository.findByMail(mail);
    if (!user) throw new Error("User not found");

    const passwordAdapter = new PasswordAdapter();
    await passwordAdapter.verify(user.password, password);

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

export { AuthenticateUserStrategy };
