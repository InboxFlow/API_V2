import { useAutomation } from "@arkyn/components";

import { CallPageHeader } from "./components/CallPageHeader";
import { CallTable } from "./components/CallTable";
import { FilterCallsDrawer } from "./components/FilterCallsDrawer";
import { ViewCallModal } from "./components/ViewCallModal";

import { OverlayProvider } from "./context";
import { CallPageContainer } from "./styles";

function CallPage() {
  useAutomation();

  return (
    <OverlayProvider>
      <CallPageContainer>
        <CallPageHeader />
        <CallTable />
        <ViewCallModal />
        <FilterCallsDrawer />
      </CallPageContainer>
    </OverlayProvider>
  );
}

export { CallPage };
