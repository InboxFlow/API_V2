import { generateId } from "@arkyn/shared";

type ChannelConstructorType = {
  id: string;
  name: string;
  userId: string;
  callsCount: number;
  createdAt: Date;
  updatedAt: Date;
};

type ChannelRestoreType = {
  id: string;
  name: string;
  userId: string;
  callsCount: number;
  createdAt: string;
  updatedAt: string;
};

type ChannelCommandCreateType = {
  name: string;
  userId: string;
};

type ChannelCommandUpdateType = {
  name: string;
};

class Channel {
  id: string;
  name: string;
  callsCount: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: ChannelConstructorType) {
    this.id = props.id;
    this.name = props.name;
    this.userId = props.userId;
    this.callsCount = props.callsCount;
    this.createdAt = props?.createdAt || new Date();
    this.updatedAt = props?.updatedAt || new Date();
  }

  static create(props: ChannelCommandCreateType): Channel {
    return new Channel({
      id: generateId("text").v7 as string,
      name: props.name,
      userId: props.userId,
      callsCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static restore(props: ChannelRestoreType): Channel {
    return new Channel({
      id: props.id,
      name: props.name,
      userId: props.userId,
      callsCount: props.callsCount,
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    });
  }

  update(props: ChannelCommandUpdateType): Channel {
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
      callsCount: this.callsCount,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      formattedCreatedAt: formattedCreatedAt.toLocaleString("pt-BR"),
    };
  }
}

export { Channel };
