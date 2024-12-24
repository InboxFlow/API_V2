import { useLocation, useNavigate } from "@remix-run/react";
import { ReactNode, useState } from "react";

import { ChevronDown } from "lucide-react";
import {
  V2LayoutNavGroupButton,
  V2LayoutNavGroupContainer,
  V2LayoutNavGroupContent,
} from "./styles";

type V2LayoutNavGroupProps = {
  to?: string;
  label: string;
  children: ReactNode;
};

function V2LayoutNavGroup(props: V2LayoutNavGroupProps) {
  const { label, to, children } = props;

  const [isOpened, setIsOpened] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = pathname === to;

  const isActiveClassName = isActive ? "active" : "";
  const isOpenedClassName = isOpened ? "opened" : "";

  const className = `${isActiveClassName} ${isOpenedClassName}`;

  function handleClick() {
    if (isOpened) {
      if (to && !isActive) navigate(to);
      setIsOpened(false);
    }

    if (!isOpened) {
      setIsOpened(true);
      if (to) navigate(to);
    }
  }

  return (
    <V2LayoutNavGroupContainer>
      <V2LayoutNavGroupButton onClick={handleClick} className={className}>
        {label}
        <ChevronDown />
      </V2LayoutNavGroupButton>

      {isOpened && (
        <V2LayoutNavGroupContent>{children}</V2LayoutNavGroupContent>
      )}
    </V2LayoutNavGroupContainer>
  );
}

export { V2LayoutNavGroup };
