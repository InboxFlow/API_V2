import { Params } from "@remix-run/react";

import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCallsSchema } from "~/infra/schemas/callSchemas";
import { Number, paginationFilter } from "~/main/services";

class ListCallsUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: Params, filters: URLSearchParams) {
    const validator = new ValidatorAdapter(listCallsSchema);
    const { channelId } = validator.formValidate(params);

    const paginationFilters = paginationFilter(filters);

    const method = filters.get("method");
    const status = filters.get("status");
    const request = filters.get("request");
    const response = filters.get("response");

    const number = new Number();

    const calls = await this.callRepository.findAll({
      ...paginationFilters,
      channelId,
      method,
      request,
      response,
      status: status ? number.stringToNumber(status) : null,
    });

    return {
      meta: calls.meta,
      data: calls.data.map((call) => call.toJson()),
    };
  }
}

export { ListCallsUsecase };
