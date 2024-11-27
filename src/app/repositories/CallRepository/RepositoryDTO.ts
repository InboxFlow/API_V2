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

interface FindAllWithoutPaginationResponse {
  id: string;
  createdAt: Date;
  method: string;
  status: number;
}

interface CallRepositoryDTO {
  findById(id: string): Promise<Call | null>;
  findAll(filters: SearchParams): Promise<{
    meta: { perPage: number; lastPage: number; totalCount: number };
    data: Call[];
  }>;
  findAllWithoutPagination(
    channelId: string
  ): Promise<FindAllWithoutPaginationResponse[]>;
  createCall(data: Call): Promise<Call>;
  deleteAllCalls(channelId: string): Promise<void>;
}

export type { CallRepositoryDTO, SearchParams };
