import { Button, ModalFooter } from "@arkyn/components";
import { useNavigation } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal, modalData } = useOverlay().updateChannelModal;
  const { state } = useNavigation();

  return (
    <ModalFooter>
      <input type="hidden" name="channelId" defaultValue={modalData?.id} />

      <Button
        type="button"
        variant="outline"
        scheme="danger"
        onClick={closeModal}
      >
        Cancel
      </Button>
      <Button isLoading={state !== "idle"} name="_action" value="updateChannel">
        Save
      </Button>
    </ModalFooter>
  );
}

export { Footer };
