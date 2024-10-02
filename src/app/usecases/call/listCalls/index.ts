import { CallRepository } from "~/app/repositories";
import { ListCallsController } from "./ListCallsController";
import { ListCallsUsecase } from "./ListCallsUsecase";

const callRepository = new CallRepository();
const listCallsUsecase = new ListCallsUsecase(callRepository);
const listCallsController = new ListCallsController(listCallsUsecase);

const listCalls = listCallsController;
export { listCalls };
