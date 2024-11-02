import { BadRequestError } from "@arkyn/server";

import { CategoryRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { deleteCategorySchema } from "~/infra/schemas/categorySchemas";

class DeleteCategoryUsecase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(deleteCategorySchema);
    const { categoryId } = validator.formValidate(params);

    const categoryExists = await this.categoryRepository.findById(categoryId);
    if (!categoryExists) throw new BadRequestError("Category not found");

    await this.categoryRepository.deleteCategory(categoryId);

    return null;
  }
}

export { DeleteCategoryUsecase };
