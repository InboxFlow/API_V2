import { Button, IconButton } from "@arkyn/components";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ArrowLeft, Pen, Trash } from "lucide-react";

import { PageHeader } from "~/client/components";
import { CallLoader } from "~/client/types";
import { useOverlay } from "../../context";

function CallPageHeader() {
  const { channel } = useLoaderData<CallLoader>();
  const title = `${channel.name}`;

  const { updateChannelModal, deleteChannelModal } = useOverlay();

  const navigate = useNavigate();
  function navigateToChannels() {
    navigate("/client/v1/channels");
  }

  return (
    <PageHeader title={title}>
      <Button
        leftIcon={ArrowLeft}
        variant="outline"
        onClick={navigateToChannels}
      >
        Back to admin
      </Button>

      <IconButton
        aria-label="Edit channel"
        variant="outline"
        icon={Pen}
        onClick={() => updateChannelModal.openModal(channel)}
      />

      <IconButton
        aria-label="Delete channel"
        variant="outline"
        icon={Trash}
        onClick={() => deleteChannelModal.openModal(channel)}
      />
    </PageHeader>
  );
}

export { CallPageHeader };
