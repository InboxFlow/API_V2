import { useAutomation, useDrawer, useModal } from "@arkyn/components";
import { createContext, ReactNode, useContext } from "react";

import { ChannelModel } from "~/client/models";

type OverlayContextType = {
  createChannelModal: ReturnType<typeof useModal<ChannelModel>>;
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

  const createChannelKey = "CREATE_EVENT_HOST_MODAL";
  const updateChannelKey = "UPDATE_EVENT_HOST_MODAL";
  const deleteChannelKey = "DELETE_EVENT_HOST_MODAL";

  return (
    <OverlayContext.Provider
      value={{
        createChannelModal: useModal(createChannelKey),
        updateChannelModal: useModal(updateChannelKey),
        deleteChannelModal: useModal(deleteChannelKey),
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayProvider, useOverlay };
