import { ErrorLogRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { deleteAllErrorLogsSchema } from "~/infra/schemas/errorLogSchemas";
import { ContextType } from "~/main/types";

class DeleteAllErrorLogsUsecase {
  constructor(private errorLogRepository: ErrorLogRepository) {}

  async execute(params: ContextType["params"]) {
    const validator = new ValidatorAdapter(deleteAllErrorLogsSchema);
    const { channelId } = validator.formValidate(params);

    await this.errorLogRepository.deleteAllErrorLogs(channelId);
    return null;
  }
}

export { DeleteAllErrorLogsUsecase };
