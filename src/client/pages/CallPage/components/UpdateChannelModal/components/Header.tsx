import { ModalHeader } from "@arkyn/components";
import { useOverlay } from "../../../context";

function Header() {
  const { modalData } = useOverlay().updateChannelModal;
  return <ModalHeader>Update channel - {modalData?.name}</ModalHeader>;
}

export { Header };
