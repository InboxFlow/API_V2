import { engines, name, type, version } from "../../package.json";

export function loader() {
  return { name, engines, type, version };
}
