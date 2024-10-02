import { UserRepository } from "~/app/repositories";
import { SignUserController } from "./signUserController";
import { SignUserUsecase } from "./signUserUsecase";

const userRepository = new UserRepository();
const signUserUsecase = new SignUserUsecase(userRepository);
const signUserController = new SignUserController(signUserUsecase);

const signUser = signUserController;
export { signUser };
