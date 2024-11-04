import { useAutomation, useDrawer, useModal } from "@arkyn/components";
import { createContext, ReactNode, useContext } from "react";

import { ErrorLogModel } from "~/client/models";

type OverlayContextType = {
  viewErrorLogModal: ReturnType<typeof useModal<ErrorLogModel>>;
  filterErrorLogsDrawer: ReturnType<typeof useDrawer<null>>;
};

const OverlayContext = createContext<OverlayContextType>(
  {} as OverlayContextType
);

const useOverlay = () => {
  const context = useContext(OverlayContext);
  return context;
};

const OverlayProvider = ({ children }: { children: ReactNode }) => {
  useAutomation();

  const viewErrorLogModalKey = "VIEW_ERROR_LOG_MODAL";
  const filterErrorLogsModalKey = "FILTER_ERROR_LOGS_DRAWER";

  return (
    <OverlayContext.Provider
      value={{
        viewErrorLogModal: useModal(viewErrorLogModalKey),
        filterErrorLogsDrawer: useDrawer(filterErrorLogsModalKey),
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayProvider, useOverlay };
