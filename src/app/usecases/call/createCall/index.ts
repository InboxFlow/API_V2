import { CallRepository, ChannelRepository } from "~/app/repositories";
import { CreateCallController } from "./CreateCallController";
import { CreateCallUsecase } from "./CreateCallUsecase";

const callRepository = new CallRepository();
const channelRepository = new ChannelRepository();
const createCallUsecase = new CreateCallUsecase(
  callRepository,
  channelRepository
);
const createCallController = new CreateCallController(createCallUsecase);

const createCall = createCallController;
export { createCall };
