import { json, Params } from "@remix-run/react";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCallsSchema } from "~/infra/schemas/callSchemas";

class ListCallsUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: Params) {
    const validator = new ValidatorAdapter(listCallsSchema);
    const { channelId } = validator.formValidate(params);

    const calls = await this.callRepository.findAll({
      limit: 20,
      offset: 0,
      channelId,
    });

    return json(calls.map((call) => call.toJson()));
  }
}

export { ListCallsUsecase };
