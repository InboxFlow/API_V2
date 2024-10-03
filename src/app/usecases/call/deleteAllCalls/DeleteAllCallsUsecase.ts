import { CallRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { deleteAllCallsSchema } from "~/infra/schemas/callSchemas";
import { ContextType } from "~/main/types";

class DeleteAllCallsUsecase {
  constructor(private callRepository: CallRepository) {}

  async execute(params: ContextType["params"]) {
    const validator = new ValidatorAdapter(deleteAllCallsSchema);
    const { channelId } = validator.formValidate(params);

    await this.callRepository.deleteAllCalls(channelId);
    return null;
  }
}

export { DeleteAllCallsUsecase };
