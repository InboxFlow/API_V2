import { Params } from "@remix-run/react";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCallsSchema } from "~/infra/schemas/callSchemas";

class ListCallsUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: Params, filters: URLSearchParams) {
    const validator = new ValidatorAdapter(listCallsSchema);
    const { channelId } = validator.formValidate(params);

    const method = filters.get("method");
    const request = filters.get("request");
    const response = filters.get("response");

    const calls = await this.callRepository.findAll({
      channelId,
      method,
      request,
      response,
    });

    return calls.map((call) => call.toJson());
  }
}

export { ListCallsUsecase };
