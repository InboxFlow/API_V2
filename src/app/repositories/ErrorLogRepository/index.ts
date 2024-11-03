import { ErrorLog } from "~/app/entities";
import { errorLogMapper } from "~/app/mappers";

import { db } from "~/main/services";

import { ErrorLogRepositoryDTO, SearchParams } from "./RepositoryDTO";

class ErrorLogRepository implements ErrorLogRepositoryDTO {
  async findAll(params: SearchParams) {
    const page = params.page;
    const perPage = params.perPage;

    const queryFilters = {
      where: {
        channelId: params.channelId,
        message: { contains: params.message || undefined },
        request: { contains: params.request || undefined },
        params: { contains: params.params || undefined },
      },
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" as "desc" },
    };

    const [data, count] = await Promise.all([
      db.errorLog.findMany(queryFilters),
      db.errorLog.count({ where: queryFilters.where }),
    ]);

    const lastPage = Math.ceil(count / perPage);

    return {
      meta: { perPage, page, lastPage, totalCount: count },
      data: data.map(ErrorLog.restore),
    };
  }

  async findById(id: string) {
    const data = await db.errorLog.findUnique({ where: { id } });

    if (!data) return null;
    return ErrorLog.restore(data);
  }

  async createErrorLog(data: ErrorLog) {
    const mappedErrorLog = errorLogMapper(data);
    await db.errorLog.create({ data: mappedErrorLog });

    return data;
  }

  async deleteAllErrorLogs(channelId: string) {
    await db.errorLog.deleteMany({ where: { channelId } });
  }
}

export { ErrorLogRepository };
