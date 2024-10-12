import { globalErrorHandler } from "@arkyn/server";
import { ActionFunction } from "@remix-run/node";

import { authenticateUser } from "~/app/strategies/authenticateUser";
import { AuthPage } from "~/client/pages/AuthPage";

export const action: ActionFunction = async (context) => {
  try {
    return await authenticateUser.handle(context);
  } catch (error) {
    return globalErrorHandler(error);
  }
};

export default function AuthRoute() {
  return <AuthPage />;
}
