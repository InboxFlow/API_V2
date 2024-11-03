import { IconButton } from "@arkyn/components";
import { Filter } from "lucide-react";
import { useOverlay } from "~/client/pages/CallPage/context";
import { CaptionContainer } from "./styles";

function Caption() {
  const { openDrawer } = useOverlay().filterCallsDrawer;

  return (
    <CaptionContainer>
      <strong>Calls list</strong>

      <IconButton
        icon={Filter}
        variant="outline"
        aria-label="Open filter call drawer calls"
        onClick={() => openDrawer()}
      />
    </CaptionContainer>
  );
}

export { Caption };
