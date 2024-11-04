import { Button, ModalFooter } from "@arkyn/components";
import { useFetcher, useNavigate } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal, modalData } = useOverlay().deleteChannelModal;
  const { state, submit } = useFetcher();
  const navigate = useNavigate();

  function handleDelete() {
    navigate("/client/v1/channels?closeAllModals=true");
    submit({}, { action: `/api/channel/${modalData?.id}`, method: "DELETE" });
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
