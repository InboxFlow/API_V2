import { Button, ModalFooter } from "@arkyn/components";

import { useOverlay } from "../../../context";

function Footer() {
  const { closeModal } = useOverlay().viewErrorLogModal;

  return (
    <ModalFooter>
      <Button type="button" variant="outline" onClick={closeModal}>
        Fechar
      </Button>
    </ModalFooter>
  );
}

export { Footer };
