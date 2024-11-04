import { TabButton, TabContainer, useAutomation } from "@arkyn/components";

import { ChannelPageHeader } from "./components/ChannelPageHeader";
import { DeleteChannelModal } from "./components/DeleteChannelModal";
import { UpdateChannelModal } from "./components/UpdateChannelModal";

import { Outlet, useLocation, useNavigate } from "@remix-run/react";
import { OverlayProvider } from "./context";
import { ChannelPageContainer } from "./styles";

function ChannelPage() {
  useAutomation();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const lastPath = pathname.split("/").pop();

  return (
    <OverlayProvider>
      <ChannelPageContainer>
        <ChannelPageHeader />

        <TabContainer defaultActive={lastPath} onClick={navigate}>
          <TabButton value="calls">Calls list</TabButton>
          <TabButton value="error-logs">Error logs</TabButton>
        </TabContainer>

        <Outlet />
        <DeleteChannelModal />
        <UpdateChannelModal />
      </ChannelPageContainer>
    </OverlayProvider>
  );
}

export { ChannelPage };
