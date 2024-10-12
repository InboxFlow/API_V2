import { ContextType } from "~/main/types";
import { AuthenticateUserStrategy } from "./AuthenticateUserStrategy";

class AuthenticateUserController {
  constructor(private authenticateUserStrategy: AuthenticateUserStrategy) {}

  async handle({ request }: ContextType) {
    const formData = Object.fromEntries(await request.formData());
    const sessionHeaders = request.headers.get("Cookie");

    return await this.authenticateUserStrategy.execute(
      formData,
      sessionHeaders
    );
  }
}

export { AuthenticateUserController };
