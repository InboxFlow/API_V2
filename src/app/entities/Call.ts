import { generateId } from "@arkyn/shared";

type CallConstructorType = {
  id: string;
  token: string;
  method: string;
  request: string;
  response: string;
  channelId: string;
  createdAt: Date;
  updatedAt: Date;
};

type CallRestoreType = {
  id: string;
  token: string;
  method: string;
  request: string;
  response: string;
  channelId: string;
  createdAt: string;
  updatedAt: string;
};

type CallCommandCreateType = {
  token: string;
  method: string;
  request: string;
  response: string;
  channelId: string;
};

class Call {
  id: string;
  token: string;
  method: string;
  request: string;
  response: string;
  channelId: string;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: CallConstructorType) {
    this.id = props.id;
    this.token = props.token;
    this.method = props.method;
    this.request = props.request;
    this.response = props.response;
    this.channelId = props.channelId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(props: CallCommandCreateType): Call {
    return new Call({
      id: generateId("text").v7 as string,
      token: props.token,
      method: props.method,
      request: props.request,
      response: props.response,
      channelId: props.channelId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static restore(props: CallRestoreType): Call {
    return new Call({
      id: props.id,
      token: props.token,
      method: props.method,
      request: props.request,
      response: props.response,
      channelId: props.channelId,
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    });
  }

  toJson() {
    return {
      id: this.id,
      token: this.token,
      method: this.method,
      request: this.request,
      response: this.response,
      channelId: this.channelId,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
    };
  }
}

export { Call };
