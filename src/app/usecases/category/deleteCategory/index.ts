import { CategoryRepository } from "~/app/repositories";
import { DeleteCategoryController } from "./DeleteCategoryController";
import { DeleteCategoryUsecase } from "./DeleteCategoryUsecase";

const categoryRepository = new CategoryRepository();
const deleteCategoryUsecase = new DeleteCategoryUsecase(categoryRepository);
const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUsecase
);

const deleteCategory = deleteCategoryController;
export { deleteCategory };
