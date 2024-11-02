import { BadRequestError } from "@arkyn/server";

import { CategoryRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { listCategoryByIdSchema } from "~/infra/schemas/categorySchemas";

class ListCategoryByIdUsecase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(listCategoryByIdSchema);
    const { categoryId } = validator.formValidate(params);

    const category = await this.categoryRepository.findById(categoryId);
    if (!category) throw new BadRequestError("Category not found");

    return category.toJson();
  }
}

export { ListCategoryByIdUsecase };
