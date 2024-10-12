import { UserRepository } from "~/app/repositories";
import { RegisterUserController } from "./RegisterUserController";
import { RegisterUserStrategy } from "./RegisterUserStrategy";

const userRepository = new UserRepository();
const registerUserUsecase = new RegisterUserStrategy(userRepository);
const registerUserController = new RegisterUserController(registerUserUsecase);

const registerUser = registerUserController;
export { registerUser };
