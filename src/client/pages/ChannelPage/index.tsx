import { useAutomation } from "@arkyn/components";

import { CategoryGroup } from "./components/CategoryGroup";
import { ChannelPageHeader } from "./components/ChannelPageHeader";
import { CreateCategoryModal } from "./components/CreateCategoryModal";
import { CreateChannelModal } from "./components/CreateChannelModal";
import { DeleteCategoryModal } from "./components/DeleteCategoryModal";
import { UpdateCategoryModal } from "./components/UpdateCategoryModal";

import { OverlayProvider } from "./context";
import { ChannelPageContainer } from "./styles";

function ChannelPage() {
  useAutomation();

  return (
    <OverlayProvider>
      <ChannelPageContainer>
        <ChannelPageHeader />
        <CategoryGroup />
        <CreateCategoryModal />
        <CreateChannelModal />
        <DeleteCategoryModal />
        <UpdateCategoryModal />
      </ChannelPageContainer>
    </OverlayProvider>
  );
}

export { ChannelPage };
