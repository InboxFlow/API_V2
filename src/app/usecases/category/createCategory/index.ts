import { CategoryRepository } from "~/app/repositories";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUsecase } from "./CreateCategoryUsecase";

const categoryRepository = new CategoryRepository();
const createCategoryUsecase = new CreateCategoryUsecase(categoryRepository);
const createCategoryController = new CreateCategoryController(
  createCategoryUsecase
);

const createCategory = createCategoryController;
export { createCategory };
