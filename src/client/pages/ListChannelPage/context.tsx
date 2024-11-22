import { useAutomation, useModal } from "@arkyn/components";
import { createContext, ReactNode, useContext } from "react";

import { CategoryModel, ChannelModel } from "~/client/models";

type OverlayContextType = {
  createCategoryModal: ReturnType<typeof useModal<CategoryModel>>;
  updateCategoryModal: ReturnType<typeof useModal<CategoryModel>>;
  deleteCategoryModal: ReturnType<typeof useModal<CategoryModel>>;
  createChannelModal: ReturnType<typeof useModal<ChannelModel>>;
  clearUserLogsModal: ReturnType<typeof useModal<null>>;
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

  const createCategoryKey = "CREATE_CATEGORY_MODAL";
  const updateCategoryKey = "UPDATE_CATEGORY_MODAL";
  const deleteCategoryKey = "DELETE_CATEGORY_MODAL";
  const createChannelKey = "CREATE_CHANNEL_MODAL";
  const clearUserLogsKey = "CLEAR_USER_LOGS_KEY";

  return (
    <OverlayContext.Provider
      value={{
        createCategoryModal: useModal(createCategoryKey),
        updateCategoryModal: useModal(updateCategoryKey),
        deleteCategoryModal: useModal(deleteCategoryKey),
        createChannelModal: useModal(createChannelKey),
        clearUserLogsModal: useModal(clearUserLogsKey),
      }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export { OverlayProvider, useOverlay };
