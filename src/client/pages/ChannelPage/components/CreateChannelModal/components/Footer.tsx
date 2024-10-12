import { Button, ModalFooter } from "@arkyn/components";
import { useNavigation } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal } = useOverlay().createChannelModal;
  const { state } = useNavigation();

  return (
    <ModalFooter>
      <Button
        type="button"
        variant="outline"
        scheme="danger"
        onClick={closeModal}
      >
        Cancel
      </Button>
      <Button isLoading={state !== "idle"} name="_action" value="createChannel">
        Create channel
      </Button>
    </ModalFooter>
  );
}

export { Footer };
