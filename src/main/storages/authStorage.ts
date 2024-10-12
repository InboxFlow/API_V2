import { createCookieSessionStorage } from "@remix-run/node";
import { name } from "../../../package.json";

const authStorage = createCookieSessionStorage({
  cookie: {
    name: `${name}-auth-storage`,
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    secrets: ["s3cr3t"],
    secure: process.env.NODE_ENV === "production",
  },
});

export { authStorage };
