import { json, Params } from "@remix-run/react";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCallsSchema } from "~/infra/schemas/callSchemas";

class ListCallsUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: Params, filters: URLSearchParams) {
    const validator = new ValidatorAdapter(listCallsSchema);
    const { channelId } = validator.formValidate(params);

    const limit = filters.get("limit") || 1000;
    const offset = filters.get("offset") || 0;
    const method = filters.get("method");
    const request = filters.get("request");
    const response = filters.get("response");

    const { data, filter } = await this.callRepository.findAll({
      limit: +limit,
      offset: +offset,
      channelId,
      method,
      request,
      response,
    });

    return json({
      filter,
      data: data.map((call) => call.toJson()),
    });
  }
}

export { ListCallsUsecase };
