import { IconButton, Input, useScopedParams } from "@arkyn/components";
import { useNavigate } from "@remix-run/react";
import { Filter, Search } from "lucide-react";

import { CaptionContainer } from "./styles";
import { useOverlay } from "~/client/pages/CallPage/context";

function Caption() {
  const navigate = useNavigate();
  const { openDrawer } = useOverlay().filterCallsDrawer;

  const { getParam, getScopedSearch } = useScopedParams();

  const defaultSearch = getParam("search") || "";
  const handleSearch = (e: string) => navigate(getScopedSearch({ search: e }));

  return (
    <CaptionContainer>
      <div></div>

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
