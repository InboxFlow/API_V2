import { generateId } from "@arkyn/shared";

type UserConstructorType = {
  id: string;
  name: string;
  mail: string;
  password: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type UserRestoreType = {
  id: string;
  name: string;
  mail: string;
  password: string;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
};

type UserCommandCreateType = {
  name: string;
  mail: string;
  password: string;
};

type UserCommandUpdateType = {
  name: string;
};

class User {
  id: string;
  name: string;
  mail: string;
  password: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: UserConstructorType) {
    this.id = props.id;
    this.name = props.name;
    this.mail = props.mail;
    this.password = props.password;
    this.verified = props.verified;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }

  static create(props: UserCommandCreateType): User {
    return new User({
      id: generateId("text").v7 as string,
      name: props.name,
      mail: props.mail,
      password: props.password,
      verified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static restore(props: UserRestoreType): User {
    return new User({
      id: props.id,
      mail: props.mail,
      name: props.name,
      password: props.password,
      verified: props.verified,
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    });
  }

  update(props: UserCommandUpdateType): User {
    this.updatedAt = new Date();
    this.name = props.name;

    return this;
  }

  toJson() {
    return {
      id: this.id,
      name: this.name,
      mail: this.mail,
      verified: this.verified,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}

export { User };
