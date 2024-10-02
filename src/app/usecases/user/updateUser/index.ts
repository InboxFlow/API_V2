import { UserRepository } from "~/app/repositories";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUsecase } from "./UpdateUserUsecase";

const userRepository = new UserRepository();
const updateUserUsecase = new UpdateUserUsecase(userRepository);
const updateUserController = new UpdateUserController(updateUserUsecase);

const updateUser = updateUserController;
export { updateUser };
