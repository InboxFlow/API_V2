import { ChannelRepository } from "~/app/repositories";
import { UpdateChannelController } from "./UpdateChannelController";
import { UpdateChannelUsecase } from "./UpdateChannelUsecase";

const channelRepository = new ChannelRepository();
const updateChannelUsecase = new UpdateChannelUsecase(channelRepository);
const updateChannelController = new UpdateChannelController(
  updateChannelUsecase
);

const updateChannel = updateChannelController;
export { updateChannel };
