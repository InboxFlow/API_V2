import { UserRepository } from "~/app/repositories";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserStrategy } from "./AuthenticateUserStrategy";

const userRepository = new UserRepository();
const authenticateUserUsecase = new AuthenticateUserStrategy(userRepository);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUsecase
);

const authenticateUser = authenticateUserController;
export { authenticateUser };
