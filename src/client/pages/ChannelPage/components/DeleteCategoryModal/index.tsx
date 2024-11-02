import { ModalContainer } from "@arkyn/components";

import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { useOverlay } from "../../context";

function DeleteCategoryModal() {
  const { modalIsOpen, closeModal } = useOverlay().deleteCategoryModal;

  return (
    <ModalContainer isVisibled={modalIsOpen} makeInvisible={closeModal}>
      <Header />
      <div>
        <Content />
        <Footer />
      </div>
    </ModalContainer>
  );
}

export { DeleteCategoryModal };
