import { Button } from "@arkyn/components";
import { Plus } from "lucide-react";

import { PageHeader } from "~/client/components";

import { useOverlay } from "../../context";
import { Content } from "./styles";

function ListChannelPageHeader() {
  const { createCategoryModal, createChannelModal } = useOverlay();

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
      </Content>
    </PageHeader>
  );
}

export { ListChannelPageHeader };
