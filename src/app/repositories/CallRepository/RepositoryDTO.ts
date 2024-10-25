import { Call } from "~/app/entities";

interface SearchParams {
  page: number;
  perPage: number;
  channelId: string;

  status: number | null;
  method: string | null;
  response: string | null;
  request: string | null;
}

interface CallRepositoryDTO {
  findById(id: string): Promise<Call | null>;
  findAll(filters: SearchParams): Promise<{
    meta: { perPage: number; lastPage: number; totalCount: number };
    data: Call[];
  }>;
  createCall(data: Call): Promise<Call>;
  deleteAllCalls(channelId: string): Promise<void>;
}

export type { CallRepositoryDTO, SearchParams };
