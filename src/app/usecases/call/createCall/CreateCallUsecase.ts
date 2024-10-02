import { json } from "@remix-run/react";

import { Call } from "~/app/entities";
import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createCallSchema } from "~/infra/schemas/callSchemas";

class CreateCallUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(body: any) {
    const validator = new ValidatorAdapter(createCallSchema);
    const { channelId, method, request, response, token } =
      validator.formValidate(body);

    const call = Call.create({ channelId, method, request, response, token });
    await this.callRepository.createCall(call);

    return json(call.toJson());
  }
}

export { CreateCallUsecase };
