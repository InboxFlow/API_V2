import { Call } from "~/app/entities";

interface SearchParams {
  method: string | null;
  response: string | null;
  request: string | null;
  channelId: string;
  offset: number;
  limit: number;
}

interface CallRepositoryDTO {
  findById(id: string): Promise<Call | null>;
  findAll(filters: SearchParams): Promise<{ data: Call[]; filter: any }>;
  createCall(data: Call): Promise<Call>;
  deleteAllCalls(channelId: string): Promise<void>;
}

export type { CallRepositoryDTO, SearchParams };
