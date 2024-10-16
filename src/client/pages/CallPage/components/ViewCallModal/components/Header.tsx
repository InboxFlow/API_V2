import { ModalHeader } from "@arkyn/components";
import { useOverlay } from "../../../context";

function Header() {
  const { modalData } = useOverlay().viewCallModal;
  return <ModalHeader>Call - {modalData?.id}</ModalHeader>;
}

export { Header };
