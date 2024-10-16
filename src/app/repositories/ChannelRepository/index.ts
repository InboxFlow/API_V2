import { asc, eq } from "drizzle-orm";

import { Channel } from "~/app/entities";
import { channelMapper } from "~/app/mappers";
import { channel } from "~/infra/database/tables";
import { db } from "~/main/services";

import { ChannelRepositoryDTO, SearchParams } from "./RepositoryDTO";

class ChannelRepository implements ChannelRepositoryDTO {
  async findAll(params: SearchParams) {
    const data = await db.query.channel.findMany({
      where: eq(channel.userId, params.userId),
      orderBy: asc(channel.name),
    });

    return data.map((item) => Channel.restore(item));
  }

  async findById(id: string) {
    const data = await db.query.channel.findFirst({
      where: eq(channel.id, id),
    });

    if (!data) return null;
    return Channel.restore(data);
  }

  async createChannel(data: Channel) {
    const mappedChannel = channelMapper(data);
    await db.insert(channel).values(mappedChannel);
    return data;
  }

  async updateChannel(data: Channel) {
    const mappedChannel = channelMapper(data);
    await db.update(channel).set(mappedChannel).where(eq(channel.id, data.id));
    return data;
  }

  async deleteChannel(id: string) {
    await db.delete(channel).where(eq(channel.id, id));
  }
}

export { ChannelRepository };
