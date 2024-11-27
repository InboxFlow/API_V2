import { BadRequestError } from "@arkyn/server";
import { Call } from "~/app/entities";
import { CallRepository, ChannelRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createCallSchema } from "~/infra/schemas/callSchemas";

class CreateCallUsecase {
  constructor(
    private callRepository: CallRepository,
    private channelRepository: ChannelRepository
  ) {}

  async execute(body: any) {
    const validator = new ValidatorAdapter(createCallSchema);
    const { channelId, method, request, response, token, status } =
      validator.formValidate(body);

    const channel = await this.channelRepository.findById(channelId);
    if (!channel) throw new BadRequestError("Channel not found");

    const call = Call.create({
      status,
      channelId,
      method,
      request,
      response,
      token,
    });

    await this.callRepository.createCall(call);

    return call.toJson();
  }
}

export { CreateCallUsecase };
