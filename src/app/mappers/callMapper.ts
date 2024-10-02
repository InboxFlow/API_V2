import { Call } from "../entities";

function callMapper(call: Call) {
  return {
    id: call.id,
    token: call.token,
    method: call.method,
    request: call.request,
    response: call.response,
    channelId: call.channelId,
    createdAt: call.createdAt.toString(),
    updatedAt: call.updatedAt.toString(),
  };
}

export { callMapper };
