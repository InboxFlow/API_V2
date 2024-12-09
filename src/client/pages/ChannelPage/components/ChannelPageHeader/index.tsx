import { Button, IconButton } from "@arkyn/components";
import { useLoaderData, useNavigate, useRevalidator } from "@remix-run/react";
import { ArrowLeft, Pen, RefreshCcw, Trash } from "lucide-react";

import { PageHeader } from "~/client/components";
import { ChannelLoader } from "~/client/types";
import { useOverlay } from "../../context";

function ChannelPageHeader() {
  const { channel } = useLoaderData<ChannelLoader>();
  const title = `${channel.name}`;

  const { updateChannelModal, deleteChannelModal } = useOverlay();
  const { revalidate, state } = useRevalidator();

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

      <IconButton
        icon={RefreshCcw}
        variant="outline"
        aria-label="Refresh"
        onClick={revalidate}
        isLoading={state !== "idle"}
      />
    </PageHeader>
  );
}

export { ChannelPageHeader };
