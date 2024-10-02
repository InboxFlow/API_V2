import { CallRepository } from "~/app/repositories";
import { ListCallByIdController } from "./ListCallByIdController";
import { ListCallByIdUsecase } from "./ListCallByIdUsecase";

const callRepository = new CallRepository();
const listCallByIdUsecase = new ListCallByIdUsecase(callRepository);
const listCallByIdController = new ListCallByIdController(listCallByIdUsecase);

const listCallById = listCallByIdController;
export { listCallById };
