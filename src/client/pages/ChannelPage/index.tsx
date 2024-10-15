import { useAutomation } from "@arkyn/components";

import { ChannelPageHeader } from "./components/ChannelPageHeader";
import { ChannelTable } from "./components/ChannelTable";
import { CreateChannelModal } from "./components/CreateChannelModal";
import { DeleteChannelModal } from "./components/DeleteChannelModal";
import { UpdateChannelModal } from "./components/UpdateChannelModal";

import { OverlayProvider } from "./context";
import { ChannelPageContainer } from "./styles";

function ChannelPage() {
  useAutomation();

  return (
    <OverlayProvider>
      <ChannelPageContainer>
        <ChannelPageHeader />
        <ChannelTable />
        <CreateChannelModal />
        <DeleteChannelModal />
        <UpdateChannelModal />
      </ChannelPageContainer>
    </OverlayProvider>
  );
}

export { ChannelPage };
