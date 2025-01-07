import { Channel, User } from "~/app/entities";
import { ChannelRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createChannelSchema } from "~/infra/schemas/channelSchemas";
import { isInternalRequest } from "~/main/services";

class CreateChannelUsecase {
  constructor(private channelRepository: ChannelRepository) {}

  async execute(body: any, user: User) {
    const validator = new ValidatorAdapter(createChannelSchema);
    const { name, categoryId } = validator.formValidate(body);

    const channel = Channel.create({
      name,
      userId: user.id,
      categoryId: categoryId,
    });

    await this.channelRepository.createChannel(channel);

    const internalRequest = isInternalRequest(body);
    if (internalRequest) return { closeModalKey: "CREATE_CHANNEL_MODAL" };

    return channel.toJson();
  }
}

export { CreateChannelUsecase };
