import { ErrorLog } from "../entities";

function errorLogMapper(errorLog: ErrorLog) {
  return {
    id: errorLog.id,
    method: errorLog.method,
    message: errorLog.message,
    params: errorLog.params,
    request: errorLog.request,
    channelId: errorLog.channelId,
    createdAt: errorLog.createdAt.toISOString(),
    updatedAt: errorLog.updatedAt.toISOString(),
  };
}

export { errorLogMapper };
