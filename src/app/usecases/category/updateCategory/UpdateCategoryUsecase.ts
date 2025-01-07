import { BadRequestError } from "@arkyn/server";

import { CategoryRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { updateCategorySchema } from "~/infra/schemas/categorySchemas";
import { isInternalRequest } from "~/main/services";

class UpdateCategoryUsecase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(body: any, params: any) {
    const validator = new ValidatorAdapter(updateCategorySchema);

    const { name, categoryId } = validator.formValidate({ ...body, ...params });

    const category = await this.categoryRepository.findById(categoryId);
    if (!category) throw new BadRequestError("Category not found");

    category.update({ name });

    await this.categoryRepository.updateCategory(category);

    const internalRequest = isInternalRequest(body);
    if (internalRequest) return { closeModalKey: "UPDATE_CATEGORY_MODAL" };

    return category.toJson();
  }
}

export { UpdateCategoryUsecase };
