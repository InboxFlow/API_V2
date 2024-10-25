import { User } from "~/app/entities";
import { ChannelRepository } from "~/app/repositories";

class ListChannelsUsecase {
  constructor(private channelRepository: ChannelRepository) {}

  async execute(user: User) {
    const [channels, callsCount] = await Promise.all([
      this.channelRepository.findAll({ userId: user.id }),
      this.channelRepository.findCallsCount({ userId: user.id }),
    ]);

    return channels.map((channel) => ({
      ...channel.toJson(),
      callsCount:
        callsCount.find((call) => call.channelId === channel.id)?.callCount ||
        0,
    }));
  }
}

export { ListChannelsUsecase };
