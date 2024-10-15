import { Button, ModalFooter } from "@arkyn/components";
import { useFetcher } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal, modalData } = useOverlay().deleteChannelModal;
  const { state, submit } = useFetcher();

  function handleDelete() {
    submit({}, { action: `/api/channel/${modalData?.id}`, method: "DELETE" });
    closeModal();
  }

  return (
    <ModalFooter>
      <Button type="button" variant="outline" onClick={closeModal}>
        Cancel
      </Button>
      <Button
        isLoading={state !== "idle"}
        onClick={handleDelete}
        scheme="danger"
      >
        Delete
      </Button>
    </ModalFooter>
  );
}

export { Footer };
