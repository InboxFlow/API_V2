import { useAutomation } from "@arkyn/components";

import { CategoryGroup } from "./components/CategoryGroup";
import { ListChannelPageHeader } from "./components/ListChannelPageHeader";
import { CreateCategoryModal } from "./components/CreateCategoryModal";
import { CreateChannelModal } from "./components/CreateChannelModal";
import { DeleteCategoryModal } from "./components/DeleteCategoryModal";
import { UpdateCategoryModal } from "./components/UpdateCategoryModal";

import { OverlayProvider } from "./context";
import { ListChannelPageContainer } from "./styles";

function ListChannelPage() {
  useAutomation();

  return (
    <OverlayProvider>
      <ListChannelPageContainer>
        <ListChannelPageHeader />
        <CategoryGroup />
        <CreateCategoryModal />
        <CreateChannelModal />
        <DeleteCategoryModal />
        <UpdateCategoryModal />
      </ListChannelPageContainer>
    </OverlayProvider>
  );
}

export { ListChannelPage };
