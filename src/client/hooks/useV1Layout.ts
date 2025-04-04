import { useMatches } from "@remix-run/react";

import { V1LayoutLoader } from "~/client/types";

function useV1Layout() {
  const matches = useMatches();
  const v1LayoutData = matches[1].data as V1LayoutLoader;

  return v1LayoutData;
}

export { useV1Layout };
