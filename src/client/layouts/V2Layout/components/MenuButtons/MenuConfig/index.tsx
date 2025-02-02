import { Popover } from "@arkyn/components";
import { Settings, Users2 } from "lucide-react";

import { useV2Layout } from "~/client/hooks";
import { BaseHeaderButton } from "../BaseHeaderButton";
import { NavigationLink, PopoverContent, PopoverHeader } from "./styles";

const ARIA_LABEL = "Open settings menu";

function MenuConfig() {
  return <></>;
  const { user } = useV2Layout();
  if (user.mail !== "lucasgoncalvesgithub@gmail.com") return <></>;

  return (
    <Popover
      button={<BaseHeaderButton ariaLabel={ARIA_LABEL} icon={Settings} />}
      closeOnClick
    >
      <PopoverHeader>
        <strong>Administration menu</strong>
        <small>Navigate through the settings</small>
      </PopoverHeader>

      <PopoverContent>
        <NavigationLink to="/client/v1/users">
          <Users2 />
          Users
        </NavigationLink>
      </PopoverContent>
    </Popover>
  );
}

export { MenuConfig };
