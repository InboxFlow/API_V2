import { ModalContainer } from "@arkyn/components";

import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { useOverlay } from "../../context";
import { useFetcher } from "@remix-run/react";

function ClearUserLogsModal() {
  const { modalIsOpen, closeModal } = useOverlay().clearUserLogsModal;

  const { Form } = useFetcher();

  return (
    <ModalContainer isVisibled={modalIsOpen} makeInvisible={closeModal}>
      <Header />
      <Form method="POST" action="/api/user/clear-logs">
        <Content />
        <Footer />
      </Form>
    </ModalContainer>
  );
}

export { ClearUserLogsModal };
