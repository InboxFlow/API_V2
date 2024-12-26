import { DocStructureType } from "../types";

import { badgeJson } from "./json/badge";
import { buttonJson } from "./json/button";
import { getStartedJson } from "./json/getStarted";
import { introductionJson } from "./json/introduction";

const documentationFiles: { [x: string]: DocStructureType } = {
  introduction: introductionJson,
  "get-started": getStartedJson,
  button: buttonJson,
  badge: badgeJson,
};

export { documentationFiles };
