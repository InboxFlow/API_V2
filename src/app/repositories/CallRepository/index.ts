import { eq } from "drizzle-orm";

import { Call } from "~/app/entities";
import { callMapper } from "~/app/mappers";
import { call } from "~/infra/database/tables";
import { db } from "~/main/services";

import { GenerateFiltersReturn } from "~/main/services/generateFilters";
import { CallRepositoryDTO } from "./RepositoryDTO";

class CallRepository implements CallRepositoryDTO {
  async findAll(filters: GenerateFiltersReturn<Call>) {
    const data = await db.query.call.findMany(filters);
    return {
      filter: filters,
      data: data.map((item) => Call.restore(item)),
    };
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

  async deleteAllCalls(channelId: string) {
    await db.delete(call).where(eq(call.channelId, channelId));
  }
}

export { CallRepository };
