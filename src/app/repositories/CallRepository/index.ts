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
        request: params.request ? { search: params.request } : undefined,
        response: params.response ? { search: params.response } : undefined,
        status: { equals: params.status || undefined },
      },
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" as "desc" },
    };

    const [data, count] = await Promise.all([
      await db.call.findMany(queryFilters),
      await db.call.count({ where: queryFilters.where }),
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

  async findPagination(params: SearchParams) {
    const page = params.page;
    const perPage = params.perPage;

    const queryFilters = {
      where: {
        channelId: params.channelId,
        method: { contains: params.method || undefined },
        request: params.request ? { search: params.request } : undefined,
        response: params.response ? { search: params.response } : undefined,
        status: { equals: params.status || undefined },
      },
      skip: (page - 1) * perPage,
      take: perPage,
      orderBy: { createdAt: "desc" as "desc" },
    };

    const count = await db.call.count({ where: queryFilters.where });

    return {
      perPage: perPage,
      lastPage: Math.ceil(count / perPage),
      totalCount: count,
    };
  }

  async createCall(data: Call) {
    const mappedCall = callMapper(data);
    await db.call.create({ data: mappedCall });

    return data;
  }

  async deleteAllCalls(channelId: string) {
    await db.call.deleteMany({ where: { channelId } });
  }
}

export { CallRepository };
