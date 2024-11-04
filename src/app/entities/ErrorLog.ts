import { generateId } from "@arkyn/shared";

type ErrorLogConstructorType = {
  id: string;
  method: string;
  message: string;
  request: string;
  params: string;
  channelId: string;
  createdAt: Date;
  updatedAt: Date;
};

type ErrorLogRestoreType = {
  id: string;
  method: string;
  message: string;
  request: string;
  params: string;
  channelId: string;
  createdAt: string;
  updatedAt: string;
};

type ErrorLogCommandCreateType = {
  method: string;
  message: string;
  request: string;
  params: string;
  channelId: string;
};

class ErrorLog {
  id: string;
  method: string;
  message: string;
  request: string;
  params: string;
  channelId: string;
  createdAt: Date;
  updatedAt: Date;

  private constructor(props: ErrorLogConstructorType) {
    this.id = props.id;
    this.method = props.method;
    this.message = props.message;
    this.params = props.params;
    this.request = props.request;
    this.channelId = props.channelId;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }

  static create(props: ErrorLogCommandCreateType): ErrorLog {
    return new ErrorLog({
      id: generateId("text").v7 as string,
      method: props.method,
      message: props.message,
      params: props.params,
      request: props.request,
      channelId: props.channelId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static restore(props: ErrorLogRestoreType): ErrorLog {
    return new ErrorLog({
      id: props.id,
      method: props.method,
      request: props.request,
      params: props.params,
      message: props.message,
      channelId: props.channelId,
      createdAt: new Date(props.createdAt),
      updatedAt: new Date(props.updatedAt),
    });
  }

  toJson() {
    const formattedCreatedAt = this.createdAt;

    if (process.env.NODE_ENV === "production") {
      formattedCreatedAt.setHours(formattedCreatedAt.getHours() - 3);
    }

    return {
      id: this.id,
      method: this.method,
      message: this.message,
      request: this.request,
      params: this.params,
      channelId: this.channelId,
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString(),
      formattedCreatedAt: formattedCreatedAt.toLocaleString("pt-BR"),
    };
  }
}

export { ErrorLog };
