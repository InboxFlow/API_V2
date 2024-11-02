import { BadRequestError } from "@arkyn/server";

import { ChannelRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { updateChannelSchema } from "~/infra/schemas/channelSchemas";

class UpdateChannelUsecase {
  constructor(private channelRepository: ChannelRepository) {}

  async execute(body: any, params: any) {
    const validator = new ValidatorAdapter(updateChannelSchema);

    const { name, channelId, categoryId } = validator.formValidate({
      ...body,
      ...params,
    });

    const channel = await this.channelRepository.findById(channelId);
    if (!channel) throw new BadRequestError("Channel not found");

    channel.update({ name, categoryId });

    await this.channelRepository.updateChannel(channel);

    return channel.toJson();
  }
}

export { UpdateChannelUsecase };
