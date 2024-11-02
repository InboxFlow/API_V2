import { useAutomation, useDrawer, useModal } from "@arkyn/components";
import { createContext, ReactNode, useContext } from "react";

import { CallModel, ChannelModel } from "~/client/models";

type OverlayContextType = {
  viewCallModal: ReturnType<typeof useModal<CallModel>>;
  filterCallsDrawer: ReturnType<typeof useDrawer<null>>;
  updateChannelModal: ReturnType<typeof useModal<ChannelModel>>;
  deleteChannelModal: ReturnType<typeof useModal<ChannelModel>>;
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
  const filterCallsModalKey = "FILTER_CALLS_DRAWER";
  const updateChannelKey = "UPDATE_CHANNEL_MODAL";
  const deleteChannelKey = "DELETE_CHANNEL_MODAL";

  return (
    <OverlayContext.Provider
      value={{
        viewCallModal: useModal(viewCallModalKey),
        filterCallsDrawer: useDrawer(filterCallsModalKey),
        updateChannelModal: useModal(updateChannelKey),
        deleteChannelModal: useModal(deleteChannelKey),
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayProvider, useOverlay };
