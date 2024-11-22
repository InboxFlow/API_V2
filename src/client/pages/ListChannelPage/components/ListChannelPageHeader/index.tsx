import { Button, IconButton } from "@arkyn/components";
import { useRevalidator } from "@remix-run/react";
import { RefreshCcw, Plus, Trash2 } from "lucide-react";

import { PageHeader } from "~/client/components";

import { useOverlay } from "../../context";
import { Content } from "./styles";

function ListChannelPageHeader() {
  const { createCategoryModal, createChannelModal, clearUserLogsModal } =
    useOverlay();

  const { revalidate, state } = useRevalidator();

  return (
    <PageHeader title="Inbox Flow Admin">
      <Content>
        <Button
          leftIcon={Plus}
          variant="outline"
          onClick={() => createCategoryModal.openModal()}
        >
          Add category
        </Button>

        <Button
          leftIcon={Plus}
          variant="outline"
          onClick={() => createChannelModal.openModal()}
        >
          Add channel
        </Button>

        <Button
          leftIcon={Trash2}
          variant="outline"
          scheme="danger"
          onClick={() => clearUserLogsModal.openModal()}
        >
          Clear logs
        </Button>

        <IconButton
          icon={RefreshCcw}
          variant="outline"
          aria-label="Refresh"
          onClick={revalidate}
          isLoading={state !== "idle"}
        />
      </Content>
    </PageHeader>
  );
}

export { ListChannelPageHeader };
