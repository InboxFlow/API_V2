import { ErrorLog } from "~/app/entities";
import { ErrorLogRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createErrorLogSchema } from "~/infra/schemas/errorLogSchemas";

class CreateErrorLogUsecase {
  constructor(private errorLogRepository: ErrorLogRepository) {}

  async execute(body: any) {
    const validator = new ValidatorAdapter(createErrorLogSchema);
    const { channelId, message, params, request } =
      validator.formValidate(body);

    const errorLog = ErrorLog.create({
      message,
      channelId,
      params,
      request,
    });

    await this.errorLogRepository.createErrorLog(errorLog);

    return errorLog.toJson();
  }
}

export { CreateErrorLogUsecase };
