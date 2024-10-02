import { Call } from "~/app/entities";

interface SearchParams {
  offset: number;
  limit: number;
  method: string | null;
  request: string | null;
  response: string | null;
  channelId: string;
}

interface CallRepositoryDTO {
  findById(id: string): Promise<Call | null>;
  findAll(searchParams: SearchParams): Promise<{
    data: Call[];
    filter: any;
  }>;

  createCall(data: Call): Promise<Call>;
  deleteAllCalls(channelId: string): Promise<void>;
}

export type { SearchParams, CallRepositoryDTO };
