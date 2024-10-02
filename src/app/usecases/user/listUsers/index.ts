import { UserRepository } from "~/app/repositories";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUsecase } from "./ListUsersUsecase";

const userRepository = new UserRepository();
const listUsersUsecase = new ListUsersUsecase(userRepository);
const listUsersController = new ListUsersController(listUsersUsecase);

const listUsers = listUsersController;
export { listUsers };
