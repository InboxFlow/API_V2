import { CategoryRepository } from "~/app/repositories";
import { UpdateCategoryController } from "./UpdateCategoryController";
import { UpdateCategoryUsecase } from "./UpdateCategoryUsecase";

const categoryRepository = new CategoryRepository();
const updateCategoryUsecase = new UpdateCategoryUsecase(categoryRepository);
const updateCategoryController = new UpdateCategoryController(
  updateCategoryUsecase
);

const updateCategory = updateCategoryController;
export { updateCategory };
