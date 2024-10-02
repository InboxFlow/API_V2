import { eq } from "drizzle-orm";

import { Call } from "~/app/entities";
import { callMapper } from "~/app/mappers";
import { call } from "~/infra/database/tables";
import { db } from "~/main/services";

import { CallRepositoryDTO, SearchParams } from "./RepositoryDTO";

class CallRepository implements CallRepositoryDTO {
  async findAll(params: SearchParams) {
    const data = await db.query.call.findMany({
      where: eq(call.channelId, params.channelId),
      offset: params.offset,
      limit: params.limit,
    });

    return data.map((item) => Call.restore(item));
  }

  async findById(id: string) {
    const data = await db.query.call.findFirst({ where: eq(call.id, id) });
    if (!data) return null;
    return Call.restore(data);
  }

  async createCall(data: Call) {
    const mappedCall = callMapper(data);
    await db.insert(call).values(mappedCall);
    return data;
  }
}

export { CallRepository };
