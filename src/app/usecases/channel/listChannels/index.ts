import { ChannelRepository } from "~/app/repositories";
import { ListChannelsController } from "./ListChannelsController";
import { ListChannelsUsecase } from "./ListChannelsUsecase";

const channelRepository = new ChannelRepository();
const listChannelsUsecase = new ListChannelsUsecase(channelRepository);
const listChannelsController = new ListChannelsController(listChannelsUsecase);

const listChannels = listChannelsController;
export { listChannels };
