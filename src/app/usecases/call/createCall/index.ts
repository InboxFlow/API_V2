import { CallRepository } from "~/app/repositories";
import { CreateCallController } from "./CreateCallController";
import { CreateCallUsecase } from "./CreateCallUsecase";

const callRepository = new CallRepository();
const createCallUsecase = new CreateCallUsecase(callRepository);
const createCallController = new CreateCallController(createCallUsecase);

const createCall = createCallController;
export { createCall };
