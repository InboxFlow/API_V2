import { Call } from "~/app/entities";

type SearchParams = {
  page: number;
  perPage: number;
  channelId: string;
  status?: number | null;
  method?: string | null;
  response?: string | null;
  request?: string | null;
};

type FindAllWithoutPaginationResponse = {
  id: string;
  createdAt: Date;
  method: string;
  status: number;
};

type CallRepositoryDTO = {
  findById(id: string): Promise<Call | null>;
  findAll(filters: SearchParams): Promise<{
    meta: { perPage: number; lastPage: number; totalCount: number };
    data: Call[];
  }>;
  findPagination(
    filters: SearchParams
  ): Promise<{ perPage: number; lastPage: number; totalCount: number }>;
  createCall(data: Call): Promise<Call>;
  deleteAllCalls(channelId: string): Promise<void>;
};

export type { CallRepositoryDTO, SearchParams };
