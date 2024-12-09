import { globalErrorHandler } from "@arkyn/server";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";

import { registerUser } from "~/app/strategies/registerUser";
import { CreateAccountPage } from "~/client/pages/CreateAccountPage";
import { isAuthenticated } from "~/main/middlewares";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const user = await isAuthenticated(request);
    if (user) return redirect("/client/v1/channels");
  } catch (error) {
    return null;
  }
};

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
