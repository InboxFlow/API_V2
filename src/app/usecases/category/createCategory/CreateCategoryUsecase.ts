import { Category, User } from "~/app/entities";
import { CategoryRepository } from "~/app/repositories";
import { ValidatorAdapter } from "~/infra/adapters";
import { createCategorySchema } from "~/infra/schemas/categorySchemas";

class CreateCategoryUsecase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(body: any, user: User) {
    const validator = new ValidatorAdapter(createCategorySchema);
    const { name } = validator.formValidate(body);

    const category = Category.create({ name, userId: user.id });
    await this.categoryRepository.createCategory(category);

    return category.toJson();
  }
}

export { CreateCategoryUsecase };
