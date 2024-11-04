import { useAutomation } from "@arkyn/components";

import { ErrorLogTable } from "./components/ErrorLogTable";
// import { FilterErrorLogsDrawer } from "./components/FilterErrorLogsDrawer";
import { ViewErrorLogModal } from "./components/ViewErrorLogModal";

import { OverlayProvider } from "./context";
import { ErrorLogPageContainer } from "./styles";

function ErrorLogPage() {
  useAutomation();

  return (
    <OverlayProvider>
      <ErrorLogPageContainer>
        <ErrorLogTable />
        <ViewErrorLogModal />
        {/* <FilterErrorLogsDrawer /> */}
      </ErrorLogPageContainer>
    </OverlayProvider>
  );
}

export { ErrorLogPage };
