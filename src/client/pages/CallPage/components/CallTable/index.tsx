import { TableContainer } from "@arkyn/components";

import { Body } from "./components/Body";
import { Caption } from "./components/Caption";
import { Header } from "./components/Header";

import { Container } from "./styles";
import { Footer } from "./components/Footer";

function CallTable() {
  return (
    <Container>
      <Caption />
      <TableContainer>
        <Header />
        <Body />
      </TableContainer>
      <Footer />
    </Container>
  );
}

export { CallTable };
