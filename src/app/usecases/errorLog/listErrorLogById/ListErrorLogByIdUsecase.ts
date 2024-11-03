import { BadRequestError } from "@arkyn/server";

import { ErrorLogRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listErrorLogByIdSchema } from "~/infra/schemas/errorLogSchemas";
import { ContextType } from "~/main/types";

class ListErrorLogByIdUsecase {
  constructor(private errorLogRepository: ErrorLogRepository) {}

  async execute(params: ContextType["params"]) {
    const validator = new ValidatorAdapter(listErrorLogByIdSchema);
    const { errorLogId } = validator.formValidate(params);

    const errorLog = await this.errorLogRepository.findById(errorLogId);
    if (!errorLog) throw new BadRequestError("ErrorLog not found");

    return errorLog.toJson();
  }
}

export { ListErrorLogByIdUsecase };
