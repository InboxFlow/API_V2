import { Call } from "../entities";

function callMapper(call: Call) {
  return {
    id: call.id,
    token: call.token,
    status: call.status,
    method: call.method,
    request: call.request,
    response: call.response,
    channelId: call.channelId,
    createdAt: call.createdAt.toISOString(),
    updatedAt: call.updatedAt.toISOString(),
  };
}

export { callMapper };
