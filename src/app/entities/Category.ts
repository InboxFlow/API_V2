import { generateId } from "@arkyn/shared";

type CategoryConstructorType = {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

type CategoryRestoreType = {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

type CategoryCommandCreateType = {
  name: string;
  userId: string;
};

type CategoryCommandUpdateType = {
  name: string;
};

class Category {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: CategoryConstructorType) {
    this.id = props.id;
    this.name = props.name;
    this.userId = props.userId;
    this.createdAt = props?.createdAt || new Date();
    this.updatedAt = props?.updatedAt || new Date();
  }

  static create(props: CategoryCommandCreateType): Category {
    return new Category({
      id: generateId("text").v7 as string,
      name: props.name,
      userId: props.userId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static restore(props: CategoryRestoreType): Category {
    return new Category({
      id: props.id,
      name: props.name,
      userId: props.userId,
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    });
  }

  update(props: CategoryCommandUpdateType): Category {
    this.updatedAt = new Date();
    this.name = props.name;
    return this;
  }

  toJson() {
    const formattedCreatedAt = this.createdAt;

    if (process.env.NODE_ENV === "production") {
      formattedCreatedAt.setHours(formattedCreatedAt.getHours() - 3);
    }

    return {
      id: this.id,
      name: this.name,
      userId: this.userId,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      formattedCreatedAt: formattedCreatedAt.toLocaleString("pt-BR"),
    };
  }
}

export { Category };
