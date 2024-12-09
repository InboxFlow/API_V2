import { LoaderFunctionArgs, redirect } from "@remix-run/node";

import { authStorage } from "~/main/storages";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getSession, destroySession } = authStorage;
  const session = await getSession(request.headers.get("Cookie"));

  return redirect("/client/auth", {
    headers: { "Set-Cookie": await destroySession(session) },
  });
}
