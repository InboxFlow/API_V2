import { ModalContainer } from "@arkyn/components";
import { useFetcher } from "@remix-run/react";

import { useOverlay } from "../../context";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function UpdateCategoryModal() {
  const { modalIsOpen, closeModal, modalData } =
    useOverlay().updateCategoryModal;

  const { Form } = useFetcher();

  return (
    <ModalContainer isVisibled={modalIsOpen} makeInvisible={closeModal}>
      <Header />
      <Form method="PATCH" action={`/api/category/${modalData?.id}`}>
        <Content />
        <Footer />
      </Form>
    </ModalContainer>
  );
}

export { UpdateCategoryModal };
