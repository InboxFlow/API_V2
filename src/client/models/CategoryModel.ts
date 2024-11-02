import { Category } from "~/app/entities";

type CategoryModel = ReturnType<Category["toJson"]>;

export type { CategoryModel };
