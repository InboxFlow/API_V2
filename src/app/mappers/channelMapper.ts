import { Channel } from "../entities";

function channelMapper(user: Channel) {
  return {
    id: user.id,
    name: user.name,
    userId: user.userId,
    createdAt: user.createdAt.toString(),
    updatedAt: user.updatedAt.toString(),
  };
}

export { channelMapper };
