import { ChannelRepository } from "~/app/repositories";
import { DeleteChannelController } from "./DeleteChannelController";
import { DeleteChannelUsecase } from "./DeleteChannelUsecase";

const channelRepository = new ChannelRepository();
const deleteChannelUsecase = new DeleteChannelUsecase(channelRepository);
const deleteChannelController = new DeleteChannelController(
  deleteChannelUsecase
);

const deleteChannel = deleteChannelController;
export { deleteChannel };
