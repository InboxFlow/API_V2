import { Button, ModalFooter } from "@arkyn/components";
import { useNavigation } from "@remix-run/react";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal } = useOverlay().createCategoryModal;
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

      <Button name="source" value="remix-form" isLoading={state !== "idle"}>
        Create category
      </Button>
    </ModalFooter>
  );
}

export { Footer };
