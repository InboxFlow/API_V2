import { BadRequestError } from "@arkyn/server";

import { CategoryRepository, ChannelRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { deleteCategorySchema } from "~/infra/schemas/categorySchemas";

class DeleteCategoryUsecase {
  constructor(
    private categoryRepository: CategoryRepository,
    private channelRepository: ChannelRepository
  ) {}

  async execute(params: any) {
    const validator = new ValidatorAdapter(deleteCategorySchema);
    const { categoryId } = validator.formValidate(params);

    const categoryExists = await this.categoryRepository.findById(categoryId);
    if (!categoryExists) throw new BadRequestError("Category not found");

    const channelExists = await this.channelRepository.findChannelsByCategoryId(
      categoryId
    );

    if (channelExists.length > 0) {
      throw new BadRequestError("Category is being used by a channel");
    }

    await this.categoryRepository.deleteCategory(categoryId);

    return null;
  }
}

export { DeleteCategoryUsecase };
