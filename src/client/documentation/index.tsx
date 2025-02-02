import { DocStructureType } from "../types";

import { badgeJson } from "./json/arkynComponents/components/badge";
import { buttonJson } from "./json/arkynComponents/components/button";
import { checkboxJson } from "./json/arkynComponents/components/checkbox";
import { iconButtonJson } from "./json/arkynComponents/components/iconButton";
import { useAutomationJson } from "./json/arkynComponents/hooks/useAutomation";

import { getStartedJson } from "./json/getStarted";
import { introductionJson } from "./json/introduction";

const documentationFiles: { [x: string]: DocStructureType } = {
  // INTRODUCTION
  introduction: introductionJson,
  "get-started": getStartedJson,

  // ARKYN COMPONENTS (COMPONENTS)
  badge: badgeJson,
  button: buttonJson,
  checkbox: checkboxJson,
  "icon-button": iconButtonJson,

  // ARKYN COMPONENTS (HOOKS)
  "use-automation": useAutomationJson,
};

export { documentationFiles };
