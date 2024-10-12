import { ModalContainer } from "@arkyn/components";
import { Form } from "@remix-run/react";

import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useOverlay } from "../../context";

function UpdateChannelModal() {
  const { modalIsOpen, closeModal } = useOverlay().updateChannelModal;

  return (
    <ModalContainer isVisibled={modalIsOpen} makeInvisible={closeModal}>
      <Header />
      <Form method="POST">
        <Content />
        <Footer />
      </Form>
    </ModalContainer>
  );
}

export { UpdateChannelModal };
