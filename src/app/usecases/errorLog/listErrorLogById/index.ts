import { ErrorLogRepository } from "~/app/repositories";
import { ListErrorLogByIdController } from "./ListErrorLogByIdController";
import { ListErrorLogByIdUsecase } from "./ListErrorLogByIdUsecase";

const errorLogRepository = new ErrorLogRepository();
const listErrorLogByIdUsecase = new ListErrorLogByIdUsecase(errorLogRepository);
const listErrorLogByIdController = new ListErrorLogByIdController(
  listErrorLogByIdUsecase
);

const listErrorLogById = listErrorLogByIdController;
export { listErrorLogById };
