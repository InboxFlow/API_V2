import { UserRepository } from "~/app/repositories";
import { ListUserByMailController } from "./ListUserByMailController";
import { ListUserByMailUsecase } from "./ListUserByMailUsecase";

const userRepository = new UserRepository();
const listUserByMailUsecase = new ListUserByMailUsecase(userRepository);
const listUserByMailController = new ListUserByMailController(
  listUserByMailUsecase
);

const listUserByMail = listUserByMailController;
export { listUserByMail };
