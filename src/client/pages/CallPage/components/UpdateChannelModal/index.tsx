import { ModalContainer } from "@arkyn/components";
import { useFetcher } from "@remix-run/react";

import { useOverlay } from "../../context";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function UpdateChannelModal() {
  const { modalIsOpen, closeModal, modalData } =
    useOverlay().updateChannelModal;

  const { Form } = useFetcher();

  return (
    <ModalContainer isVisibled={modalIsOpen} makeInvisible={closeModal}>
      <Header />
      <Form method="PATCH" action={`/api/channel/${modalData?.id}`}>
        <Content />
        <Footer />
      </Form>
    </ModalContainer>
  );
}

export { UpdateChannelModal };
