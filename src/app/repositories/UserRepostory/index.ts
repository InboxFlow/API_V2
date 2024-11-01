import { User } from "~/app/entities";
import { userMapper } from "~/app/mappers";
import { db } from "~/main/services";

import { UserRepositoryDTO } from "./RepositoryDTO";

class UserRepository implements UserRepositoryDTO {
  async findAll() {
    const data = await db.user.findMany({
      orderBy: { createdAt: "desc" },
    });

    return data.map((item) => User.restore(item));
  }

  async findById(id: string) {
    const data = await db.user.findUnique({ where: { id } });
    if (!data) return null;
    return User.restore(data);
  }

  async findByMail(mail: string) {
    const data = await db.user.findUnique({ where: { mail } });
    if (!data) return null;
    return User.restore(data);
  }

  async createUser(data: User) {
    const mappedUser = userMapper(data);
    await db.user.create({ data: mappedUser });
    return data;
  }

  async updateUser(data: User) {
    const mappedUser = userMapper(data);
    await db.user.update({ data: mappedUser, where: { id: data.id } });
    return data;
  }

  async deleteUser(id: string) {
    await db.user.delete({ where: { id } });
  }
}

export { UserRepository };
