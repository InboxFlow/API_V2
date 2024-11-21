import { extractJsonFromRequest } from "@arkyn/server";

import { isAuthenticated } from "~/main/middlewares";
import { ContextType } from "~/main/types";

import { ClearUserLogsUsecase } from "./ClearUserLogsUsecase";

class ClearUserLogsController {
  constructor(private clearUserLogsUsecase: ClearUserLogsUsecase) {}

  async handle({ request }: ContextType) {
    const { id } = await isAuthenticated(request);
    const body = await extractJsonFromRequest(request);

    return await this.clearUserLogsUsecase.execute(body, id);
  }
}

export { ClearUserLogsController };
