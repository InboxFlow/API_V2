import { buttonJson } from "./json/button";
import { getStartedJson } from "./json/getStarted";
import { introductionJson } from "./json/introduction";

import { DocStructureType } from "../types";

const documentationFiles: { [x: string]: DocStructureType } = {
  introduction: introductionJson,
  "get-started": getStartedJson,
  button: buttonJson,
};

export { documentationFiles };
