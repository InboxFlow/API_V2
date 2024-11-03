import { ErrorLogRepository } from "~/app/repositories";
import { CreateErrorLogController } from "./CreateErrorLogController";
import { CreateErrorLogUsecase } from "./CreateErrorLogUsecase";

const errorLogRepository = new ErrorLogRepository();
const createErrorLogUsecase = new CreateErrorLogUsecase(errorLogRepository);
const createErrorLogController = new CreateErrorLogController(
  createErrorLogUsecase
);

const createErrorLog = createErrorLogController;
export { createErrorLog };
