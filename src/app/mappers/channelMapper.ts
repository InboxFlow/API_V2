import { Channel } from "../entities";

function channelMapper(channel: Channel) {
  return {
    id: channel.id,
    name: channel.name,
    userId: channel.userId,
    createdAt: channel.createdAt.toString(),
    updatedAt: channel.updatedAt.toString(),
  };
}

export { channelMapper };
