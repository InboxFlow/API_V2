import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { call } from "~/infra/database/tables";
import { listCallsSchema } from "~/infra/schemas/callSchemas";
import { generateFilters } from "~/main/services";
import { ContextType } from "~/main/types";

class ListCallsUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: ContextType["params"], searchParams: URLSearchParams) {
    const validator = new ValidatorAdapter(listCallsSchema);
    const { channelId } = validator.formValidate(params);

    const filters = generateFilters(call, searchParams, {
      method: "equal",
      response: "include",
      request: "include",
    });

    const { data, filter } = await this.callRepository.findAll(filters);

    return {
      filter,
      data: data.map((call) => call.toJson()),
    };
  }
}

export { ListCallsUsecase };
