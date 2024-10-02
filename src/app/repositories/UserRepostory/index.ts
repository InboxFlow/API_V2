import { eq } from "drizzle-orm";

import { User } from "~/app/entities";
import { userMapper } from "~/app/mappers";
import { user } from "~/infra/database/tables";
import { db } from "~/main/services";

import { SearchParams, UserRepositoryDTO } from "./RepositoryDTO";

class UserRepository implements UserRepositoryDTO {
  async findAll(params: SearchParams) {
    const data = await db.query.user.findMany(params);
    return data.map((item) => User.restore(item));
  }

  async findById(id: string) {
    const data = await db.query.user.findFirst({ where: eq(user.id, id) });
    if (!data) return null;
    return User.restore(data);
  }

  async findByMail(mail: string) {
    const data = await db.query.user.findFirst({ where: eq(user.mail, mail) });
    if (!data) return null;
    return User.restore(data);
  }

  async createUser(data: User) {
    const mappedUser = userMapper(data);
    await db.insert(user).values(mappedUser);
    return data;
  }

  async updateUser(data: User) {
    const mappedUser = userMapper(data);
    await db.update(user).set(mappedUser).where(eq(user.id, data.id));
    return data;
  }

  async deleteUser(id: string) {
    await db.delete(user).where(eq(user.id, id));
  }
}

export { UserRepository };
