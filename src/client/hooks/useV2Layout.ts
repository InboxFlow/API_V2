import { useMatches } from "@remix-run/react";

import { V2LayoutLoader } from "~/client/types";

function useV2Layout() {
  const matches = useMatches();
  const v1LayoutData = matches[1].data as V2LayoutLoader;

  return v1LayoutData;
}

export { useV2Layout };
