import { BadRequestError } from "@arkyn/server";

import {
  CallRepository,
  ChannelRepository,
  ErrorLogRepository,
  UserRepository,
} from "~/app/repositories";

import { PasswordAdapter, ValidatorAdapter } from "~/infra/adapters";
import { clearUserLogsSchema } from "~/infra/schemas/userSchemas";

class ClearUserLogsUsecase {
  constructor(
    private userRepository: UserRepository,
    private channelRepository: ChannelRepository,
    private callRepository: CallRepository,
    private errorLogRepository: ErrorLogRepository
  ) {}

  async execute(body: any, userId: string) {
    const validator = new ValidatorAdapter(clearUserLogsSchema);
    const { password } = validator.formValidate(body);

    const user = await this.userRepository.findById(userId);
    if (!user) throw new BadRequestError("User not found");

    const passwordAdapter = new PasswordAdapter();

    await passwordAdapter.verify(
      user.password,
      password,
      "unprocessableEntity"
    );

    const channels = await this.channelRepository.findAll({ userId });

    const mappedChannels = channels.map((channel) => channel.id);
    mappedChannels.map(async (channelId) => {
      await Promise.all([
        await this.callRepository.deleteAllCalls(channelId),
        await this.errorLogRepository.deleteAllErrorLogs(channelId),
      ]);
    });

    return null;
  }
}

export { ClearUserLogsUsecase };
