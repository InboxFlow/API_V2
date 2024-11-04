import { ModalHeader } from "@arkyn/components";
import { useOverlay } from "../../../context";

function Header() {
  const { modalData } = useOverlay().viewErrorLogModal;
  return <ModalHeader>Error log - {modalData?.id}</ModalHeader>;
}

export { Header };
