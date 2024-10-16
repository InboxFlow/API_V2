import { Call } from "~/app/entities";

interface SearchParams {
  method: string | null;
  response: string | null;
  request: string | null;
  channelId: string;
}

interface CallRepositoryDTO {
  findById(id: string): Promise<Call | null>;
  findAll(filters: SearchParams): Promise<Call[]>;
  createCall(data: Call): Promise<Call>;
  deleteAllCalls(channelId: string): Promise<void>;
}

export type { CallRepositoryDTO, SearchParams };
