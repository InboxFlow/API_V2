import { useAutomation } from "@arkyn/components";

import { CallPageHeader } from "./components/CallPageHeader";
import { CallTable } from "./components/CallTable";
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
      </CallPageContainer>
    </OverlayProvider>
  );
}

export { CallPage };
