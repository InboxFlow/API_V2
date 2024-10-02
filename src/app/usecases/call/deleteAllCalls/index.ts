import { CallRepository } from "~/app/repositories";
import { DeleteAllCallsController } from "./DeleteAllCallsController";
import { DeleteAllCallsUsecase } from "./DeleteAllCallsUsecase";

const callRepository = new CallRepository();
const deleteAllCallsUsecase = new DeleteAllCallsUsecase(callRepository);
const deleteAllCallsController = new DeleteAllCallsController(
  deleteAllCallsUsecase
);

const deleteAllCalls = deleteAllCallsController;
export { deleteAllCalls };
