import { Button, ModalFooter } from "@arkyn/components";
import { useNavigation } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal, modalData } = useOverlay().deleteChannelModal;
  const { state } = useNavigation();

  return (
    <ModalFooter>
      <input type="hidden" name="id" defaultValue={modalData?.id} />
      <Button type="button" variant="outline" onClick={closeModal}>
        Cancel
      </Button>
      <Button
        isLoading={state !== "idle"}
        name="_action"
        scheme="danger"
        value="deleteChannel"
      >
        Delete
      </Button>
    </ModalFooter>
  );
}

export { Footer };
