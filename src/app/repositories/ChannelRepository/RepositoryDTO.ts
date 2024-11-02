import { Channel } from "~/app/entities";

interface SearchParams {
  userId: string;
}

interface ChannelRepositoryDTO {
  findAll(searchParams: SearchParams): Promise<Channel[]>;
  findChannelsByCategoryId(categoryId: string): Promise<Channel[]>;
  findById(id: string): Promise<Channel | null>;
  createChannel(data: Channel): Promise<Channel>;
  updateChannel(data: Channel): Promise<Channel>;
  deleteChannel(id: string): Promise<void>;
}

export type { SearchParams, ChannelRepositoryDTO };
