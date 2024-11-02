import { ModalHeader } from "@arkyn/components";
import { useOverlay } from "../../../context";

function Header() {
  const { modalData } = useOverlay().updateCategoryModal;
  return <ModalHeader>Update category - {modalData?.name}</ModalHeader>;
}

export { Header };
