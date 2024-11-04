import { IconButton } from "@arkyn/components";
import { Filter } from "lucide-react";
import { useOverlay } from "~/client/pages/ErrorLogPage/context";
import { CaptionContainer } from "./styles";

function Caption() {
  const { openDrawer } = useOverlay().filterErrorLogsDrawer;

  return (
    <CaptionContainer>
      <IconButton
        icon={Filter}
        variant="outline"
        aria-label="Open filter errorLog drawer errorLogs"
        onClick={() => openDrawer()}
      />
    </CaptionContainer>
  );
}

export { Caption };
