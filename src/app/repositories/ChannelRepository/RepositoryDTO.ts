import { Channel } from "~/app/entities";

interface SearchParams {
  offset: number;
  limit: number;
  userId: string;
}

interface ChannelRepositoryDTO {
  findAll(searchParams: SearchParams): Promise<Channel[]>;
  findById(id: string): Promise<Channel | null>;

  createChannel(data: Channel): Promise<Channel>;
  updateChannel(data: Channel): Promise<Channel>;
  deleteChannel(id: string): Promise<void>;
}

export type { SearchParams, ChannelRepositoryDTO };
