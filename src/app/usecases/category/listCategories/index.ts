import { CategoryRepository } from "~/app/repositories";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUsecase } from "./ListCategoriesUsecase";

const categoryRepository = new CategoryRepository();
const listCategoriesUsecase = new ListCategoriesUsecase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUsecase
);

const listCategories = listCategoriesController;
export { listCategories };
