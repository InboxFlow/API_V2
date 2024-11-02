import { Category } from "~/app/entities";
import { categoryMapper } from "~/app/mappers";
import { db } from "~/main/services";

import { CategoryRepositoryDTO, SearchParams } from "./RepositoryDTO";

class CategoryRepository implements CategoryRepositoryDTO {
  async findAll(params: SearchParams) {
    const data = await db.category.findMany({
      where: { userId: params.userId },
      orderBy: { name: "asc" },
    });

    return data.map(Category.restore);
  }

  async findById(id: string) {
    const data = await db.category.findUnique({ where: { id } });
    if (!data) return null;
    return Category.restore(data);
  }

  async createCategory(data: Category) {
    const mappedCategory = categoryMapper(data);
    await db.category.create({ data: mappedCategory });
    return data;
  }

  async updateCategory(data: Category) {
    const mappedCategory = categoryMapper(data);
    await db.category.update({ data: mappedCategory, where: { id: data.id } });
    return data;
  }

  async deleteCategory(id: string) {
    await db.category.delete({ where: { id } });
  }
}

export { CategoryRepository };
