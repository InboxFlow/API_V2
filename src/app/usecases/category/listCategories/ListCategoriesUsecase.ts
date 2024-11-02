import { User } from "~/app/entities";
import { CategoryRepository } from "~/app/repositories";

class ListCategoriesUsecase {
  constructor(private categoryRepository: CategoryRepository) {}

  async execute(user: User) {
    const categories = await this.categoryRepository.findAll({
      userId: user.id,
    });
    return categories.map((category) => category.toJson());
  }
}

export { ListCategoriesUsecase };
