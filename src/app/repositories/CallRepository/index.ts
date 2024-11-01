import { Call } from "~/app/entities";
import { callMapper } from "~/app/mappers";

import { db } from "~/main/services";

import { CallRepositoryDTO, SearchParams } from "./RepositoryDTO";

class CallRepository implements CallRepositoryDTO {
  async findAll(params: SearchParams) {
    const page = params.page;
    const perPage = params.perPage;

    const queryFilters = {
      where: {
        channelId: params.channelId,
        method: { contains: params.method || undefined },
        request: { contains: params.request || undefined },
        response: { contains: params.response || undefined },
        status: { equals: params.status || undefined },
      },
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" as "desc" },
    };

    const [data, count] = await Promise.all([
      db.call.findMany(queryFilters),
      db.call.count({ where: queryFilters.where }),
    ]);

    const lastPage = Math.ceil(count / perPage);

    return {
      meta: { perPage, page, lastPage, totalCount: count },
      data: data.map(Call.restore),
    };
  }

  async findById(id: string) {
    const data = await db.call.findUnique({ where: { id } });

    if (!data) return null;
    return Call.restore(data);
  }

  async createCall(data: Call) {
    const existsCalls = await db.call.findMany({
      where: { channelId: data.channelId },
      orderBy: { createdAt: "asc" },
    });

    if (existsCalls.length >= 10000) {
      const oldestCall = existsCalls[0];
      await db.call.delete({ where: { id: oldestCall.id } });
    }

    const mappedCall = callMapper(data);
    await db.call.create({ data: mappedCall });

    return data;
  }

  async deleteAllCalls(channelId: string) {
    await db.call.deleteMany({ where: { channelId } });
  }
}

export { CallRepository };
