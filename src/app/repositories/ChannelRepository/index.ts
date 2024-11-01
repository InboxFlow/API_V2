import { Channel } from "~/app/entities";
import { channelMapper } from "~/app/mappers";
import { db } from "~/main/services";

import { ChannelRepositoryDTO, SearchParams } from "./RepositoryDTO";

class ChannelRepository implements ChannelRepositoryDTO {
  async findAll(params: SearchParams) {
    const data = await db.channel.findMany({
      where: { userId: params.userId },
      orderBy: { name: "asc" },
      include: { _count: { select: { calls: true } } },
    });

    return data.map((item) =>
      Channel.restore({ ...item, callsCount: item._count.calls })
    );
  }

  async findById(id: string) {
    const data = await db.channel.findUnique({
      where: { id },
      include: { _count: { select: { calls: true } } },
    });
    if (!data) return null;
    return Channel.restore({ ...data, callsCount: data._count.calls });
  }

  async createChannel(data: Channel) {
    const mappedChannel = channelMapper(data);
    await db.channel.create({ data: mappedChannel });
    return data;
  }

  async updateChannel(data: Channel) {
    const mappedChannel = channelMapper(data);
    await db.channel.update({ data: mappedChannel, where: { id: data.id } });
    return data;
  }

  async deleteChannel(id: string) {
    await db.channel.delete({ where: { id } });
  }
}

export { ChannelRepository };
