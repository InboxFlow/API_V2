import { useAutomation, useModal } from "@arkyn/components";
import { createContext, ReactNode, useContext } from "react";

import { CallModel } from "~/client/models";

type OverlayContextType = {
  viewCallModal: ReturnType<typeof useModal<CallModel>>;
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

  const viewCallModalKey = "VIEW_CALL_MODAL";

  return (
    <OverlayContext.Provider
      value={{ viewCallModal: useModal(viewCallModalKey) }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayProvider, useOverlay };
