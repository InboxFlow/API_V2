import { json } from "@remix-run/react";
import { version } from "../../package.json";

export function loader() {
  return json({ version });
}
