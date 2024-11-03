import { ErrorLog } from "~/app/entities";

interface SearchParams {
  page: number;
  perPage: number;
  channelId: string;

  params: string | null;
  message: string | null;
  request: string | null;
}

interface ErrorLogRepositoryDTO {
  findById(id: string): Promise<ErrorLog | null>;
  findAll(filters: SearchParams): Promise<{
    meta: { perPage: number; lastPage: number; totalCount: number };
    data: ErrorLog[];
  }>;
  createErrorLog(data: ErrorLog): Promise<ErrorLog>;
  deleteAllErrorLogs(channelId: string): Promise<void>;
}

export type { ErrorLogRepositoryDTO, SearchParams };
