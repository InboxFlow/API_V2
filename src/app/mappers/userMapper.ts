import { User } from "../entities";

function userMapper(user: User) {
  return {
    id: user.id,
    name: user.name,
    mail: user.mail,
    password: user.password,
    verified: user.verified,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  };
}

export { userMapper };
