import { CategoryRepository, ChannelRepository } from "~/app/repositories";
import { DeleteCategoryController } from "./DeleteCategoryController";
import { DeleteCategoryUsecase } from "./DeleteCategoryUsecase";

const categoryRepository = new CategoryRepository();
const channelRepository = new ChannelRepository();
const deleteCategoryUsecase = new DeleteCategoryUsecase(
  categoryRepository,
  channelRepository
);
const deleteCategoryController = new DeleteCategoryController(
  deleteCategoryUsecase
);

const deleteCategory = deleteCategoryController;
export { deleteCategory };
