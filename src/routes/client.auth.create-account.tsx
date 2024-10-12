import { globalErrorHandler } from "@arkyn/server";
import { ActionFunction } from "@remix-run/node";

import { registerUser } from "~/app/strategies/registerUser";
import { CreateAccountPage } from "~/client/pages/CreateAccountPage";

export const action: ActionFunction = async (context) => {
  try {
    return await registerUser.handle(context);
  } catch (error) {
    return globalErrorHandler(error);
  }
};

export default function CreateAccountRoute() {
  return <CreateAccountPage />;
}
