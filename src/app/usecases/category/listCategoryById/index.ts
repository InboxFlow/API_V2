import { CategoryRepository } from "~/app/repositories";
import { ListCategoryByIdController } from "./ListCategoryByIdController";
import { ListCategoryByIdUsecase } from "./ListCategoryByIdUsecase";

const categoryRepository = new CategoryRepository();
const listCategoryByIdUsecase = new ListCategoryByIdUsecase(categoryRepository);
const listCategoryByIdController = new ListCategoryByIdController(
  listCategoryByIdUsecase
);

const listCategoryById = listCategoryByIdController;
export { listCategoryById };
