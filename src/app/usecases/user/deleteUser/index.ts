import { UserRepository } from "~/app/repositories";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUsecase } from "./DeleteUserUsecase";

const userRepository = new UserRepository();
const deleteUserUsecase = new DeleteUserUsecase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserUsecase);

const deleteUser = deleteUserController;
export { deleteUser };
