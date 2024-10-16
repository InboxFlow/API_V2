import { User } from "~/app/entities";

interface UserRepositoryDTO {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByMail(mail: string): Promise<User | null>;

  createUser(data: User): Promise<User>;
  updateUser(data: Omit<User, "password">): Promise<User>;
  deleteUser(id: string): Promise<void>;
}

export type { UserRepositoryDTO };
