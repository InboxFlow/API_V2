import { ErrorLogRepository } from "~/app/repositories";
import { ListErrorLogsController } from "./ListErrorLogsController";
import { ListErrorLogsUsecase } from "./ListErrorLogsUsecase";

const errorLogRepository = new ErrorLogRepository();
const listErrorLogsUsecase = new ListErrorLogsUsecase(errorLogRepository);
const listErrorLogsController = new ListErrorLogsController(
  listErrorLogsUsecase
);

const listErrorLogs = listErrorLogsController;
export { listErrorLogs };
