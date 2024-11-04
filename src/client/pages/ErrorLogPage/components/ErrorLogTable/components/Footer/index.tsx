import { Pagination } from "@arkyn/components";
import { useLoaderData } from "@remix-run/react";

import { ErrorLogLoader } from "~/client/types";
import { FooterContainer } from "./styles";

function Footer() {
  const { errorLogs } = useLoaderData<ErrorLogLoader>();
  const { totalCount, lastPage, page } = errorLogs.meta;

  return (
    <FooterContainer>
      <p>
        Displaying {page} of {lastPage} pages - {totalCount} errorLogs
      </p>
      <Pagination totalCountRegisters={totalCount} />
    </FooterContainer>
  );
}

export { Footer };
