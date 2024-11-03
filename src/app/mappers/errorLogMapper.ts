import { ErrorLog } from "../entities";

function errorLogMapper(errorLog: ErrorLog) {
  return {
    id: errorLog.id,
    message: errorLog.message,
    params: errorLog.params,
    request: errorLog.request,
    channelId: errorLog.channelId,
    createdAt: errorLog.createdAt.toString(),
    updatedAt: errorLog.updatedAt.toString(),
  };
}

export { errorLogMapper };
