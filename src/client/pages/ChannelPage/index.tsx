import { useAutomation } from "@arkyn/components";

import { ChannelPageHeader } from "./components/ChannelPageHeader";
import { DeleteChannelModal } from "./components/DeleteChannelModal";
import { UpdateChannelModal } from "./components/UpdateChannelModal";

import { Outlet } from "@remix-run/react";
import { OverlayProvider } from "./context";
import { ChannelPageContainer } from "./styles";

function ChannelPage() {
  useAutomation();

  return (
    <OverlayProvider>
      <ChannelPageContainer>
        <ChannelPageHeader />
        <Outlet />
        <DeleteChannelModal />
        <UpdateChannelModal />
      </ChannelPageContainer>
    </OverlayProvider>
  );
}

export { ChannelPage };
