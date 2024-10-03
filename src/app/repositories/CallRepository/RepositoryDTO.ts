import { Call } from "~/app/entities";
import { GenerateFiltersReturn } from "~/main/services/generateFilters";

interface CallRepositoryDTO {
  findById(id: string): Promise<Call | null>;
  findAll(filters: GenerateFiltersReturn<Call>): Promise<{
    data: Call[];
    filter: any;
  }>;

  createCall(data: Call): Promise<Call>;
  deleteAllCalls(channelId: string): Promise<void>;
}

export type { CallRepositoryDTO };
