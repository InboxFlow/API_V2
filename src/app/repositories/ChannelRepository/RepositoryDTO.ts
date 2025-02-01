import { Channel } from "~/app/entities";

type SearchParams = {
  userId: string;
};

type ChannelRepositoryDTO = {
  findAll(searchParams: SearchParams): Promise<Channel[]>;
  findChannelsByCategoryId(categoryId: string): Promise<Channel[]>;
  findById(id: string): Promise<Channel | null>;
  createChannel(data: Channel): Promise<Channel>;
  updateChannel(data: Channel): Promise<Channel>;
  deleteChannel(id: string): Promise<void>;
};

export type { SearchParams, ChannelRepositoryDTO };
