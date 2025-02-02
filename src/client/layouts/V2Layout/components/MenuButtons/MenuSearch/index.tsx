import { Popover } from "@arkyn/components";
import { Search } from "lucide-react";

import { useV2Layout } from "~/client/hooks";
import { BaseHeaderButton } from "../BaseHeaderButton";
import { PopoverContent, PopoverHeader } from "./styles";

const ARIA_LABEL = "Open search modal";

function MenuSearch() {
  return <></>;

  const { user } = useV2Layout();
  if (user.mail !== "lucasgoncalvesgithub@gmail.com") return <></>;

  return (
    <Popover
      button={<BaseHeaderButton ariaLabel={ARIA_LABEL} icon={Search} />}
      closeOnClick
    >
      <PopoverHeader></PopoverHeader>
      <PopoverContent></PopoverContent>
    </Popover>
  );
}

export { MenuSearch };
