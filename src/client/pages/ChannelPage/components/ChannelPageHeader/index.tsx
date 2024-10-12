import { Button, IconButton } from "@arkyn/components";
import { Plus } from "lucide-react";

import { PageHeader } from "~/client/components";

import { useOverlay } from "../../context";
import { Content } from "./styles";

function ChannelPageHeader() {
  const { openModal } = useOverlay().createChannelModal;
  const handleOpenModal = () => openModal();

  return (
    <PageHeader title="Channels">
      <Content>
        <Button leftIcon={Plus} onClick={handleOpenModal}>
          Add channel
        </Button>

        <IconButton
          icon={Plus}
          aria-label="Open create channel modal"
          onClick={handleOpenModal}
        />
      </Content>
    </PageHeader>
  );
}

export { ChannelPageHeader };
