import { and, asc, desc, eq, like } from "drizzle-orm";

import { Call } from "~/app/entities";
import { callMapper } from "~/app/mappers";
import { call } from "~/infra/database/tables";
import { db } from "~/main/services";

import { CallRepositoryDTO, SearchParams } from "./RepositoryDTO";

class CallRepository implements CallRepositoryDTO {
  async findAll(params: SearchParams) {
    const conditions = [eq(call.channelId, params.channelId)];

    if (params?.method) {
      conditions.push(eq(call.method, params.method));
    }

    if (params?.request) {
      conditions.push(like(call.request, `%${params.request}%`));
    }

    if (params?.response) {
      conditions.push(like(call.response, `%${params.response}%`));
    }

    const data = await db.query.call.findMany({
      where: and(...conditions),
      orderBy: desc(call.createdAt),
    });

    return data.map((item) => Call.restore(item));
  }

  async findById(id: string) {
    const data = await db.query.call.findFirst({ where: eq(call.id, id) });
    if (!data) return null;
    return Call.restore(data);
  }

  async createCall(data: Call) {
    const existingCalls = await db.query.call.findMany({
      where: eq(call.channelId, data.channelId),
      orderBy: asc(call.createdAt),
    });

    if (existingCalls.length >= 10000) {
      const oldestCall = existingCalls[0];
      await db.delete(call).where(eq(call.id, oldestCall.id));
    }

    const mappedCall = callMapper(data);
    await db.insert(call).values(mappedCall);
    return data;
  }

  async deleteAllCalls(channelId: string) {
    await db.delete(call).where(eq(call.channelId, channelId));
  }
}

export { CallRepository };
