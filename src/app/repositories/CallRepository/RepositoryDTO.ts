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
  findAll(searchParams: SearchParams): Promise<Call[]>;
  findById(id: string): Promise<Call | null>;

  createCall(data: Call): Promise<Call>;
}

export type { SearchParams, CallRepositoryDTO };
