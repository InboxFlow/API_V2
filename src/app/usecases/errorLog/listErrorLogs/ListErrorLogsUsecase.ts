import { Params } from "@remix-run/react";

import { ErrorLogRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listErrorLogsSchema } from "~/infra/schemas/errorLogSchemas";
import { paginationFilter } from "~/main/services";

class ListErrorLogsUsecase {
  constructor(private errorLogRepository: ErrorLogRepository) {}

  async execute(contextParams: Params, filters: URLSearchParams) {
    const validator = new ValidatorAdapter(listErrorLogsSchema);
    const { channelId } = validator.formValidate(contextParams);

    const paginationFilters = paginationFilter(filters);

    const params = filters.get("params");
    const message = filters.get("message");
    const request = filters.get("request");

    const errorLogs = await this.errorLogRepository.findAll({
      ...paginationFilters,
      channelId,
      params,
      request,
      message,
    });

    return {
      meta: errorLogs.meta,
      data: errorLogs.data.map((errorLog) => errorLog.toJson()),
    };
  }
}

export { ListErrorLogsUsecase };
