import { ContextType } from "~/main/types";

import { RegisterUserStrategy } from "./RegisterUserStrategy";

class RegisterUserController {
  constructor(private registerUserStrategy: RegisterUserStrategy) {}

  async handle({ request }: ContextType) {
    const formData = Object.fromEntries(await request.formData());
    const sessionHeaders = request.headers.get("Cookie");

    return await this.registerUserStrategy.execute(formData, sessionHeaders);
  }
}

export { RegisterUserController };
