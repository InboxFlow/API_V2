import { ModalContainer } from "@arkyn/components";
import { Form, useFetcher } from "@remix-run/react";

import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { useOverlay } from "../../context";

function CreateCategoryModal() {
  const { modalIsOpen, closeModal } = useOverlay().createCategoryModal;
  const { Form } = useFetcher();

  return (
    <ModalContainer isVisibled={modalIsOpen} makeInvisible={closeModal}>
      <Header />
      <Form method="POST" action="/api/category">
        <Content />
        <Footer />
      </Form>
    </ModalContainer>
  );
}

export { CreateCategoryModal };
