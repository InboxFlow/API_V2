import { User } from "~/app/entities";

interface SearchParams {
  offset: number;
  limit: number;
}

interface UserRepositoryDTO {
  findAll(searchParams: SearchParams): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByMail(mail: string): Promise<User | null>;

  createUser(data: User): Promise<User>;
  updateUser(data: Omit<User, "password">): Promise<User>;
  deleteUser(id: string): Promise<void>;
}

export type { SearchParams, UserRepositoryDTO };
