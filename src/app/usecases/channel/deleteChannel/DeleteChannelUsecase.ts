import { BadRequestError } from "@arkyn/server";

import { ChannelRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { deleteChannelSchema } from "~/infra/schemas/channelSchemas";

class DeleteChannelUsecase {
  constructor(private channelRepository: ChannelRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(deleteChannelSchema);
    const { channelId } = validator.formValidate(params);

    const channelExists = await this.channelRepository.findById(channelId);
    if (!channelExists) throw new BadRequestError("Channel not found");

    await this.channelRepository.deleteChannel(channelId);

    return null;
  }
}

export { DeleteChannelUsecase };
