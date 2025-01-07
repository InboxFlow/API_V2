import { ErrorLog } from "~/app/entities";
import { ErrorLogRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createErrorLogSchema } from "~/infra/schemas/errorLogSchemas";
import { isInternalRequest } from "~/main/services";

class CreateErrorLogUsecase {
  constructor(private errorLogRepository: ErrorLogRepository) {}

  async execute(body: any) {
    const validator = new ValidatorAdapter(createErrorLogSchema);
    const { channelId, message, params, request, method } =
      validator.formValidate(body);

    const errorLog = ErrorLog.create({
      method,
      message,
      channelId,
      params,
      request,
    });

    await this.errorLogRepository.createErrorLog(errorLog);

    const internalRequest = isInternalRequest(body);
    if (internalRequest) return { closeModalKey: "CREATE_ERROR_LOG_MODAL" };

    return errorLog.toJson();
  }
}

export { CreateErrorLogUsecase };
