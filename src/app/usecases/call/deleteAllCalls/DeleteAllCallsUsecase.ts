import { Params } from "@remix-run/react";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { deleteAllCallsSchema } from "~/infra/schemas/callSchemas";

class DeleteAllCallsUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: Params) {
    const validator = new ValidatorAdapter(deleteAllCallsSchema);
    const { channelId } = validator.formValidate(params);

    await this.callRepository.deleteAllCalls(channelId);
    return null;
  }
}

export { DeleteAllCallsUsecase };
