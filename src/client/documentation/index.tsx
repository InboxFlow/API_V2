import { DocStructureType } from "../types";

import { getStartedJson } from "./json/getStarted";
import { introductionJson } from "./json/introduction";

const documentationFiles: { [x: string]: DocStructureType } = {
  introduction: introductionJson,
  "get-started": getStartedJson,
};

export { documentationFiles };
