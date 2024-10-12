import { Popover } from "@arkyn/components";
import { Settings, Users2 } from "lucide-react";

import { useV1Layout } from "~/client/hooks";
import { BaseHeaderButton } from "../BaseHeaderButton";
import { NavigationLink, PopoverContent, PopoverHeader } from "./styles";

const ARIA_LABEL = "Abrir o menu de configurações";

function MenuConfig() {
  const { user } = useV1Layout();
  if (user.mail !== "lucasedugoncalves123@gmail.com") return <></>;

  return (
    <Popover
      button={<BaseHeaderButton ariaLabel={ARIA_LABEL} icon={Settings} />}
      closeOnClick
    >
      <PopoverHeader>
        <strong>Menu de administração</strong>
        <small>Navegue entre as configurações</small>
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
