import { Category } from "../entities";

function categoryMapper(category: Category) {
  return {
    id: category.id,
    name: category.name,
    userId: category.userId,
    createdAt: category.createdAt.toISOString(),
    updatedAt: category.updatedAt.toISOString(),
  };
}

export { categoryMapper };
