import { Pagination } from "@arkyn/components";
import { useLoaderData } from "@remix-run/react";

import { CallLoader } from "~/client/types";
import { FooterContainer } from "./styles";

function Footer() {
  const { calls } = useLoaderData<CallLoader>();
  const { totalCount, lastPage, page } = calls.meta;

  return (
    <FooterContainer>
      <p>
        Displaying {page} of {lastPage} pages - {totalCount} calls
      </p>
      <Pagination totalCountRegisters={totalCount} />
    </FooterContainer>
  );
}

export { Footer };
