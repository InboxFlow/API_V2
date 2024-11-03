import { ErrorLogRepository } from "~/app/repositories";
import { DeleteAllErrorLogsController } from "./DeleteAllErrorLogsController";
import { DeleteAllErrorLogsUsecase } from "./DeleteAllErrorLogsUsecase";

const errorLogRepository = new ErrorLogRepository();
const deleteAllErrorLogsUsecase = new DeleteAllErrorLogsUsecase(
  errorLogRepository
);
const deleteAllErrorLogsController = new DeleteAllErrorLogsController(
  deleteAllErrorLogsUsecase
);

const deleteAllErrorLogs = deleteAllErrorLogsController;
export { deleteAllErrorLogs };
