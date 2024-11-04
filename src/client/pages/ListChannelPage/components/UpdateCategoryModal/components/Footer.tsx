import { Button, ModalFooter } from "@arkyn/components";
import { useNavigation } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal } = useOverlay().updateCategoryModal;
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

      <Button isLoading={state !== "idle"}>Save</Button>
    </ModalFooter>
  );
}

export { Footer };
