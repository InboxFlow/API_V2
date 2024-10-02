import { json } from "@remix-run/react";
import { User } from "~/app/entities";

import { ChannelRepository } from "~/app/repositories";

class ListChannelsUsecase {
  constructor(private channelRepository: ChannelRepository) {}

  async execute(user: User) {
    const channels = await this.channelRepository.findAll({
      limit: 20,
      offset: 0,
      userId: user.id,
    });

    return json(channels.map((channel) => channel.toJson()));
  }
}

export { ListChannelsUsecase };
