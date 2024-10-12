import { Popover } from "@arkyn/components";
import { Calendar, FileText, LogOut, Webhook } from "lucide-react";

import { useV1Layout } from "~/client/hooks";

import {
  MenuUserContainer,
  NavigationLink,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
} from "./styles";

function OpenPopoverButton() {
  const { user } = useV1Layout();
  const userAvatar = `https://ui-avatars.com/api/?name=${user.name}`;
  return (
    <MenuUserContainer>
      <img src={userAvatar} alt={user.name} />
    </MenuUserContainer>
  );
}

function MenuUser() {
  const { user } = useV1Layout();

  return (
    <Popover button={<OpenPopoverButton />}>
      <PopoverHeader>
        <strong>{user.name}</strong>
        <small>{user.mail}</small>
      </PopoverHeader>
      <PopoverContent>
        <NavigationLink to="/client/v1/channels">
          <Webhook />
          Inbox channels
        </NavigationLink>

        <NavigationLink to="/client/v2/introduction">
          <FileText />
          View documentation
        </NavigationLink>
      </PopoverContent>
      <PopoverFooter>
        <NavigationLink className="danger" to="/api/logout">
          <LogOut />
          Sair
        </NavigationLink>
      </PopoverFooter>
    </Popover>
  );
}

export { MenuUser };
