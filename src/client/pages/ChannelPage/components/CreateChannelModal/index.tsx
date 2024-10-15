import { ModalContainer } from "@arkyn/components";
import { Form, useFetcher } from "@remix-run/react";

import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { useOverlay } from "../../context";

function CreateChannelModal() {
  const { modalIsOpen, closeModal } = useOverlay().createChannelModal;
  const { Form } = useFetcher();

  return (
    <ModalContainer isVisibled={modalIsOpen} makeInvisible={closeModal}>
      <Header />
      <Form method="POST" action="/api/channel">
        <Content />
        <Footer />
      </Form>
    </ModalContainer>
  );
}

export { CreateChannelModal };
