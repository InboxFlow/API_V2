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

  async findAllWithoutPagination(channelId: string) {
    const data = await db.call.findMany({
      select: { id: true, createdAt: true, method: true, status: true },
      orderBy: { createdAt: "asc" },
      where: { channelId },
    });

    return data.map((call) => ({
      id: call.id,
      createdAt: new Date(call.createdAt),
      method: call.method,
      status: call.status,
    }));
  }

  async findById(id: string) {
    const data = await db.call.findUnique({ where: { id } });

    if (!data) return null;
    return Call.restore(data);
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
