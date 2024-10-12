import { CreateChannelModal } from "./components/CreateChannelModal";
import { DeleteChannelModal } from "./components/DeleteChannelModal";
import { ChannelPageHeader } from "./components/ChannelPageHeader";
import { ChannelTable } from "./components/ChannelTable";
import { UpdateChannelModal } from "./components/UpdateChannelModal";

import { OverlayProvider } from "./context";
import { ChannelPageContainer } from "./styles";

function ChannelPage() {
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
