import { DocStructureType } from "../types";

import { badgeJson } from "./json/badge";
import { buttonJson } from "./json/button";
import { checkboxJson } from "./json/checkbox";
import { getStartedJson } from "./json/getStarted";
import { iconButtonJson } from "./json/iconButton";
import { introductionJson } from "./json/introduction";

const documentationFiles: { [x: string]: DocStructureType } = {
  // INTRODUCTION
  introduction: introductionJson,
  "get-started": getStartedJson,

  // ARKYN COMPONENTS
  badge: badgeJson,
  button: buttonJson,
  checkbox: checkboxJson,
  "icon-button": iconButtonJson,
};

export { documentationFiles };
