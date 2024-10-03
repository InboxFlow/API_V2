import { BadRequestError } from "@arkyn/server";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCallByIdSchema } from "~/infra/schemas/callSchemas";
import { ContextType } from "~/main/types";

class ListCallByIdUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: ContextType["params"]) {
    const validator = new ValidatorAdapter(listCallByIdSchema);
    const { callId } = validator.formValidate(params);

    const call = await this.callRepository.findById(callId);
    if (!call) throw new BadRequestError("Call not found");

    return call.toJson();
  }
}

export { ListCallByIdUsecase };
