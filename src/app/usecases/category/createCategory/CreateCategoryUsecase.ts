import { Category, User } from "~/app/entities";
import { CategoryRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createCategorySchema } from "~/infra/schemas/categorySchemas";
import { isInternalRequest } from "~/main/services";

class CreateCategoryUsecase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(body: any, user: User) {
    const validator = new ValidatorAdapter(createCategorySchema);
    const { name } = validator.formValidate(body);

    const category = Category.create({ name, userId: user.id });
    await this.categoryRepository.createCategory(category);

    const internalRequest = isInternalRequest(body);
    if (internalRequest) return { closeModalKey: "CREATE_CATEGORY_MODAL" };

    return category.toJson();
  }
}

export { CreateCategoryUsecase };
