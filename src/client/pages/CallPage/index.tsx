import { useAutomation } from "@arkyn/components";

import { CallPageHeader } from "./components/CallPageHeader";
import { CallTable } from "./components/CallTable";

import { CallPageContainer } from "./styles";

function CallPage() {
  useAutomation();

  return (
    <CallPageContainer>
      <CallPageHeader />
      <CallTable />
    </CallPageContainer>
  );
}

export { CallPage };
