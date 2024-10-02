import { BadRequestError } from "@arkyn/server";
import { json } from "@remix-run/react";

import { ChannelRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listChannelByIdSchema } from "~/infra/schemas/channelSchemas";

class ListChannelByIdUsecase {
  constructor(private channelRepository: ChannelRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(listChannelByIdSchema);
    const { channelId } = validator.formValidate(params);

    const channel = await this.channelRepository.findById(channelId);
    if (!channel) throw new BadRequestError("Channel not found");

    return json(channel.toJson());
  }
}

export { ListChannelByIdUsecase };
