import { Category } from "~/app/entities";

type SearchParams = {
  userId: string;
};

type CategoryRepositoryDTO = {
  findAll(searchParams: SearchParams): Promise<Category[]>;
  findById(id: string): Promise<Category | null>;
  createCategory(data: Category): Promise<Category>;
  updateCategory(data: Category): Promise<Category>;
  deleteCategory(id: string): Promise<void>;
};

export type { SearchParams, CategoryRepositoryDTO };
