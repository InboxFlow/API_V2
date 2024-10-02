import { ChannelRepository } from "~/app/repositories";
import { ListChannelByIdController } from "./ListChannelByIdController";
import { ListChannelByIdUsecase } from "./ListChannelByIdUsecase";

const channelRepository = new ChannelRepository();
const listChannelByIdUsecase = new ListChannelByIdUsecase(channelRepository);
const listChannelByIdController = new ListChannelByIdController(
  listChannelByIdUsecase
);

const listChannelById = listChannelByIdController;
export { listChannelById };
