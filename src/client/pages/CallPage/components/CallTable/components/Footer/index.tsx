import { Pagination } from "@arkyn/components";
import { useLoaderData } from "@remix-run/react";

import { ChannelLoader } from "~/client/types";
import { FooterContainer } from "./styles";

function Footer() {
  const { channels } = useLoaderData<ChannelLoader>();
  // const { currentPage, totalItems, totalPages } = channels.;aadsD
  return <></>;
  // return (
  //   <FooterContainer>
  //     <p>
  //       Exibindo {currentPage} de {totalPages} páginas
  //     </p>

  //     <Pagination totalCountRegisters={totalItems} />
  //   </FooterContainer>
  // );
}

export { Footer };
