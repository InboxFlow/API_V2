import { BadRequestError } from "@arkyn/server";
import { json } from "@remix-run/react";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCallByIdSchema } from "~/infra/schemas/callSchemas";

class ListCallByIdUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(listCallByIdSchema);
    const { callId } = validator.formValidate(params);

    const call = await this.callRepository.findById(callId);
    if (!call) throw new BadRequestError("Call not found");

    return json(call.toJson());
  }
}

export { ListCallByIdUsecase };
