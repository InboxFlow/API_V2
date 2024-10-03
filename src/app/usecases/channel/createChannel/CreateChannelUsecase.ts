import { Channel, User } from "~/app/entities";
import { ChannelRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createChannelSchema } from "~/infra/schemas/channelSchemas";

class CreateChannelUsecase {
  constructor(private channelRepository: ChannelRepository) {}

  async execute(body: any, user: User) {
    const validator = new ValidatorAdapter(createChannelSchema);
    const { name } = validator.formValidate(body);

    const channel = Channel.create({ name, userId: user.id });
    await this.channelRepository.createChannel(channel);

    return channel.toJson();
  }
}

export { CreateChannelUsecase };
