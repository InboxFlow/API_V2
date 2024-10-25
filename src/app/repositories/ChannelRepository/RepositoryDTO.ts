import { Channel } from "~/app/entities";

interface SearchParams {
  userId: string;
}

interface ChannelRepositoryDTO {
  findAll(searchParams: SearchParams): Promise<Channel[]>;
  findCallsCount(
    searchParams: SearchParams
  ): Promise<{ channelId: string; callCount: number }[]>;
  findById(id: string): Promise<Channel | null>;

  createChannel(data: Channel): Promise<Channel>;
  updateChannel(data: Channel): Promise<Channel>;
  deleteChannel(id: string): Promise<void>;
}

export type { SearchParams, ChannelRepositoryDTO };
