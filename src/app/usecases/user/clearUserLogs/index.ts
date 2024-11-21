import {
  UserRepository,
  CallRepository,
  ChannelRepository,
  ErrorLogRepository,
} from "~/app/repositories";
import { ClearUserLogsController } from "./ClearUserLogsController";
import { ClearUserLogsUsecase } from "./ClearUserLogsUsecase";

const userRepository = new UserRepository();
const channelRepository = new ChannelRepository();
const callRepository = new CallRepository();
const errorLogRepository = new ErrorLogRepository();

const clearUserLogsUsecase = new ClearUserLogsUsecase(
  userRepository,
  channelRepository,
  callRepository,
  errorLogRepository
);

const clearUserLogsController = new ClearUserLogsController(
  clearUserLogsUsecase
);

const clearUserLogs = clearUserLogsController;

export { clearUserLogs };
