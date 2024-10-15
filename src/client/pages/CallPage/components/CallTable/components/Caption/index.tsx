import { Input, useScopedParams } from "@arkyn/components";
import { useNavigate } from "@remix-run/react";
import { Search } from "lucide-react";

import { CaptionContainer } from "./styles";

function Caption() {
  const navigate = useNavigate();

  const { getParam, getScopedSearch } = useScopedParams();

  const defaultSearch = getParam("search") || "";
  const handleSearch = (e: string) => navigate(getScopedSearch({ search: e }));

  return (
    <CaptionContainer>
      <Input
        type="text"
        name="search-example"
        rightIcon={Search}
        placeholder="Buscar..."
        defaultValue={defaultSearch}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </CaptionContainer>
  );
}

export { Caption };
