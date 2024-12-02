import { LoaderFunctionArgs } from "@remix-run/node";

import { V1Layout } from "~/client/layouts/V1Layout";
import { isAuthenticated } from "~/main/middlewares";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await isAuthenticated(request);
  return { user: user.toJson() };
};

export default function V1LayoutRoute() {
  return <V1Layout />;
}
