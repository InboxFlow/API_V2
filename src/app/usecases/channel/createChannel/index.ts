import { ChannelRepository } from "~/app/repositories";
import { CreateChannelController } from "./CreateChannelController";
import { CreateChannelUsecase } from "./CreateChannelUsecase";

const channelRepository = new ChannelRepository();
const createChannelUsecase = new CreateChannelUsecase(channelRepository);
const createChannelController = new CreateChannelController(
  createChannelUsecase
);

const createChannel = createChannelController;
export { createChannel };
