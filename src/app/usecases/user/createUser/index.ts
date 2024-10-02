import { UserRepository } from "~/app/repositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUsecase } from "./CreateUserUsecase";

const userRepository = new UserRepository();
const createUserUsecase = new CreateUserUsecase(userRepository);
const createUserController = new CreateUserController(createUserUsecase);

const createUser = createUserController;
export { createUser };
