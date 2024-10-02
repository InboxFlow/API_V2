import { UserRepository } from "~/app/repositories";
import { ListUserByIdController } from "./ListUserByIdController";
import { ListUserByIdUsecase } from "./ListUserByIdUsecase";

const userRepository = new UserRepository();
const listUserByIdUsecase = new ListUserByIdUsecase(userRepository);
const listUserByIdController = new ListUserByIdController(listUserByIdUsecase);

const listUserById = listUserByIdController;
export { listUserById };
