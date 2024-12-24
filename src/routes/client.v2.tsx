import { LoaderFunctionArgs } from "@remix-run/node";

import { V2Layout } from "~/client/layouts/V2Layout";
import { isAuthenticated } from "~/main/middlewares";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const user = await isAuthenticated(request);
  return { user: user.toJson() };
};

export default function V2LayoutRoute() {
  return <V2Layout />;
}
