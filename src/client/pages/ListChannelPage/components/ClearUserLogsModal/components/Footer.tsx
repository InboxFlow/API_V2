import { Button, ModalFooter } from "@arkyn/components";
import { useFetcher } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal } = useOverlay().clearUserLogsModal;
  const { state } = useFetcher();

  return (
    <ModalFooter>
      <Button type="button" variant="outline" onClick={closeModal}>
        Cancel
      </Button>
      <Button isLoading={state !== "idle"} scheme="danger">
        Clear all
      </Button>
    </ModalFooter>
  );
}

export { Footer };
